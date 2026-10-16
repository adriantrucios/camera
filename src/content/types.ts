export type Lesson = {
  slug: string;
  title: string;
  summary: string;
  durationMinutes: number;
  order: number;
  sections: LessonSection[];
};

export type LessonSection = {
  heading: string;
  body: string[];
};
