export type Job = {
  alt: string;
  company: string;
  description: string;
  endDate: Date;
  logo: string;
  role: string;
  startDate: Date;
  currentJob: boolean;
};

export type Experience = {
  _createdAt: Date;
  _id: string;
  alt: string;
  jobs: Job[];
  subtitle: string;
  title: string;
};
