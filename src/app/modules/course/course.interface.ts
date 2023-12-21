export type Tcourse = {
  name: string;
  description: string;
  price: number;
  duration?: number;
  topics: string[];
  level?: 'Beginner' | 'Intermediate' | 'Advanced';
  schedule: {
    startDate: string;
    endDate: string;
    classDays: string[];
    classTime: string;
  };
};
