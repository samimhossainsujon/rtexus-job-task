import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendCourseResponse from '../../utils/sendCourseResposnse';
import { CourseServices } from './course.service';

// =====================================
// Post Course
// ======================================

const createCourse = catchAsync(async (req, res) => {
  const courseData = req.body;
  const result = await CourseServices.createCourseIntoDB(courseData);
  sendCourseResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course created successfully',
    data: result,
  });
});

// ================================================
// all course get function
// ================================================
const getAllCourse = catchAsync(async (req, res) => {
  const result = await CourseServices.getAllCourseFromDB();
  sendCourseResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course Recived Successfully',
    data: result,
  });
});

// ================================================
// single course get by id
// ================================================

// const getSingleCourse = catchAsync(async (req, res) => {
//   const _id = req.params._id;
//   const courseid = await CourseServices.getSingleCourseFromDB(_id);

//   sendCourseResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Single Course Data retrieved successfully',
//     data: courseid,
//   });
// });

export const CourseController = {
  createCourse,
  getAllCourse,
};
