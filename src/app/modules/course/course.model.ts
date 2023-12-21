import { Schema, model } from 'mongoose';
import { Tcourse } from './course.interface';

const courseSchema = new Schema<Tcourse>({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  level: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'] },
  topics: { type: [String], required: true },
  duration: { type: Number, required: true },
  schedule: {
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    classDays: [{ type: String, required: true }],
    classTime: { type: String, required: true },
  },
});

const CourseModel = model<Tcourse>('Course', courseSchema);
export default CourseModel;
