export type TLevel = 'Beginner' | 'Intermediate' | 'Advanced';
export type TclassDays = 'Monday' | 'Wednesday' | 'Friday';

export type ClassDays = {
  level: TLevel;
  description: string;
};

export type Details = {
  level: TLevel;
  description: string;
};

export type TimeRanges = string;

export type Schedule = {
  startDate: string;
  endDate: string;
  classDays: TclassDays[];
  classTime: string;
};

export type Tcourse = {
  name: string;
  description: string;
  price: number;
  durationInWeeks?: number;
  level: Details;
  topics: { name: string; isDeleted: boolean }[];
  schedule: Schedule;
};
