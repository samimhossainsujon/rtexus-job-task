import { Tcourse } from './course.interface';
import CourseModel from './course.model';

// const createCourseIntoDB = async (Course: Tcourse) => {
//   const result = await CourseModel.create(Course);
//   return result;
// };

class CourseService {
  calculateDurationInWeeks(startDate: string, endDate: string): number {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeDifference = Math.abs(end.getTime() - start.getTime());
    const durationInDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
    const durationInWeeks = Math.ceil(durationInDays / 7);
    return durationInWeeks;
  }

  async createCourse(courseData: Tcourse): Promise<Tcourse> {
    try {
      const { startDate, endDate } = courseData.schedule;
      courseData.duration = this.calculateDurationInWeeks(startDate, endDate);

      const newCourse = new CourseModel(courseData);
      const savedCourse = await newCourse.save();

      return savedCourse.toObject();
    } catch (error) {
      throw new Error('Error creating course in the database');
    }
  }
}

// Usage of the CourseService class
const courseService = new CourseService();

// Example usage of createCourseIntoDB function
const createCourseIntoDB = async (course: Tcourse) => {
  try {
    const result = await courseService.createCourse(course);
    return result;
  } catch (error) {
    console.log(error);
    throw new Error('Error creating course in the database');
  }
};

const getSingleCourseFromDB = async (_id: string) => {
  const CourseData = await CourseModel.findOne({ _id });
  const result = { course: CourseData };
  return result;
};

export const CourseServices = {
  createCourseIntoDB,
  getSingleCourseFromDB,
};
