export type LessonExample = {
  title: string;
  setup: string;
  whatToNotice: string;
};

export type LessonPractice = {
  title: string;
  goal: string;
  steps: string[];
  successLooksLike: string;
};

export type LessonSection = {
  heading: string;
  body: string[];
};

export type Lesson = {
  slug: string;
  title: string;
  summary: string;
  durationMinutes: number;
  order: number;
  goal: string;
  sections: LessonSection[];
  tips: string[];
  examples: LessonExample[];
  takeaways: string[];
  practice: LessonPractice;
};
