import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CoursesController } from './courses.controller';
import { UpdateCourseValidationSchema } from './courses.validation';

const router = express.Router();

router.get('/', CoursesController.getPaginatedAndFilteredCourses);
// router.get('/:_id/reviews', CoursesController.getSingleCourses);
router.put(
  '/:_id',
  validateRequest(UpdateCourseValidationSchema),
  CoursesController.UpdateCourses,
);

export const CoursesRoutes = router;
