/* eslint-disable @typescript-eslint/no-explicit-any */
import CourseModel from '../course/course.model';
import { Tcourses } from './courses.interface';


const updateCoursesDataInDB = async (
  courseId: string,
  updatedData: {
    title: string;
    instructor: string;
    categoryId: object;
    price: number;
    tags: { name: string; isDeleted: boolean }[];
    startDate: string;
    endDate: string;
    language: string;
    provider: string;
    details: {
      level: string;
      description: string;
    };
  },
) => {
  const UpdateCourses = await CourseModel.findOneAndUpdate(
    { _id: courseId },
    updatedData,
    {
      new: true,
    },
  ).select({
    _id: 1,
    courseId: 1,
    title: 1,
    categoryId: 1,
    price: 1,
    tags: 1,
    startDate: 1,
    endDate: 1,
    language: 1,
    provider: 1,
    details: 1,
  });

  if (!UpdateCourses) {
    throw new Error('Courses not found');
  }

  return UpdateCourses;
};

const getPaginatedAndFilteredCoursesFromDB = async (filters: Tcourses) => {
  try {
    const {
      page = 1,
      limit = 10,
      sortBy,
      sortOrder = 'asc',
      minPrice,
      maxPrice,
      tags,
      startDate,
      endDate,
      language,
      provider,
      durationInWeeks,
      level,
    } = filters;

    const query: any = {};

    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = minPrice;
      if (maxPrice) query.price.$lte = maxPrice;
    }

    if (tags) {
      query.tags.name = tags;
    }

    if (startDate || endDate) {
      query.startDate = {};
      if (startDate) query.startDate.$gte = new Date(startDate);
      if (endDate) query.startDate.$lte = new Date(endDate);
    }

    if (language) query.language = language;
    if (provider) query.provider = provider;
    if (durationInWeeks) query.durationInWeeks = durationInWeeks;
    if (level) query.level = level;

    const sortOption: any = {};
    if (sortBy) {
      sortOption[sortBy] = sortOrder === 'asc' ? 1 : -1;
    }

    const result = await CourseModel.find(query)
      .sort(sortOption)
      .skip((page - 1) * limit)
      .limit(limit);

    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const CoursesServices = {
  updateCoursesDataInDB,
  getPaginatedAndFilteredCoursesFromDB,
};
