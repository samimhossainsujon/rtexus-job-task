import { Router } from 'express';
import { CourseRoutes } from '../modules/course/course.route';
import { CoursesRoutes } from '../modules/courses/courses.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/course',
    route: CourseRoutes,
  },
  {
    path: '/courses',
    route: CoursesRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
