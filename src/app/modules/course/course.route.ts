import express from 'express';
import { CourseController } from './course.controller';

const router = express.Router();

router.post('/', CourseController.createCourse);
router.get('/', CourseController.getAllCourse);
router.get('/:_id', CourseController.getSingleCourse);
router.delete('/:_id', CourseController.deleteSingleCourse);
router.patch('/:_id', CourseController.updateSingelCourse);
export const CourseRoutes = router;

