import { z } from 'zod';
import { LevelSchema } from '../course/course.model';

const tagsSchema = z.object({
  name: z.string(),
  isDeleted: z.boolean(),
});

const DetailsSchema = z.object({
  level: z.enum([...LevelSchema] as [string, ...string[]]),
  description: z.string(),
});
export const UpdateCourseValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    instructor: z.string(),
    categoryId: z.string(),
    price: z.number(),
    tags: z.array(tagsSchema),
    startDate: z.string(),
    endDate: z.string(),
    language: z.string(),
    provider: z.string(),
    durationInWeeks: z.number(),
    details: DetailsSchema,
  }),
});
