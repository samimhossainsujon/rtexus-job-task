import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendCourseResponse from '../../utils/sendCourseResposnse';
import { Tcourses } from './courses.interface';
import { CoursesServices } from './courses.service';

// const getSingleCourses = catchAsync(async (req, res) => {
//   const _id = req.params._id;
//   const courseid = await CoursesServices.getSingleCoursesFromDB(_id);
//   sendCourseResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Single Course Data retrieved successfully',
//     data: courseid,
//   });
// });

const UpdateCourses = catchAsync(async (req, res) => {
  const courseId: string = req.params._id;
  const updatedCourses = req.body;

  if (!courseId) {
    throw new Error('Course Id is required');
  }

  const CoursesUpdateResult = await CoursesServices.updateCoursesDataInDB(
    courseId,
    updatedCourses,
  );

  sendCourseResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course updated successfully',
    data: CoursesUpdateResult,
  });
});

const getPaginatedAndFilteredCourses = catchAsync(async (req, res) => {
  const queryParams = req.query as unknown as Tcourses;

  const result =  await CoursesServices.getPaginatedAndFilteredCoursesFromDB(queryParams);


  sendCourseResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Courses retrieved successfully',
    data: {
      meta: queryParams,
      data: result,
    },
  });
});

export const CoursesController = { 
  UpdateCourses,
  getPaginatedAndFilteredCourses,
};
