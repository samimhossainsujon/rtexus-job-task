import { TLevel } from "../course/course.interface";

export type Details = {
  level: TLevel;
  description: string;
};

export type Tcourses = {
  limit: number;
  page: number;
  meta: {
    page?: number;
    limit?: number;
    total?: number;
  };
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  minPrice?: number;
  maxPrice?: number;
  tags?: string;
  startDate?: string;
  endDate?: string;
  language?: string;
  provider?: string;
  durationInWeeks?: number;
  level?: string;
};
