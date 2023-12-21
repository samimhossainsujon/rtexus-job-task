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

const getSingleCourse = catchAsync(async (req, res) => {
  const _id = req.params._id;
  const Result = await CourseServices.getSingleCourseFromDB(_id);

  sendCourseResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single Course Data retrieved successfully',
    data: Result,
  });
});

// ================================================
// Delete user _id
// ================================================
const deleteSingleCourse = catchAsync(async (req, res) => {
  const CourseId = req.params._id;

  if (!CourseId) {
    throw new Error('User ID is required');
  }
  await CourseServices.deleteUserDataFromDB(CourseId);
  sendCourseResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single Course Data Delete successfully',
    data: CourseId,
  });
});

// ================================================
// Update single Course
// ================================================

const updateSingelCourse = catchAsync(async (req, res) => {
  const _id: string = req.params._id;
  const updatedData = req.body;
  if (!_id) {
    throw new Error('User ID is required');
  }
  const result = await CourseServices.updateCourseDataInDB(_id, updatedData);
  sendCourseResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single Course Data update successfully',
    data: result,
  });
});

export const CourseController = {
  createCourse,
  getAllCourse,
  getSingleCourse,
  deleteSingleCourse,
  updateSingelCourse,
};
