import { Tcourse } from './course.interface';
import CourseModel from './course.model';

// export const createCourseIntoDB = async (course: Tcourse): Promise<Tcourse> => {
//   class CourseService {
//     calculateDurationInWeeks(startDate: string, endDate: string): number {
//       const start = new Date(startDate);
//       const end = new Date(endDate);

//       const timeDifference = Math.abs(end.getTime() - start.getTime());
//       const durationInDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
//       const durationInWeeks = Math.ceil(durationInDays / 7);
//       return durationInWeeks;
//     }

//     async createCourse(courseData: Tcourse): Promise<Tcourse> {
//       try {
//         const { schedule, ...rest } = courseData;
//         const { startDate, endDate } = schedule;
//         rest.duration = this.calculateDurationInWeeks(startDate, endDate);
//         const newCourse = new CourseModel(rest);
//         const savedCourse: Tcourse = await newCourse.save();

//         return savedCourse.toObject();
//       } catch (error) {
//         throw new Error('Error creating course in the database');
//       }
//     }
//   }

//   const courseService = new CourseService();
//   const result = await courseService.createCourse(course);
//   return result;
// };

const createCourseIntoDB = async (Course: Tcourse) => {
  const result = await CourseModel.create(Course);
  return result;
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
