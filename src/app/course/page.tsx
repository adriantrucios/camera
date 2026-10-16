import type { Metadata } from "next";
import Link from "next/link";
import { course, getLessons } from "@/content/lessons";

export const metadata: Metadata = {
  title: "Course",
};

export default function CoursePage() {
  const lessons = getLessons();

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-14 sm:py-20">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-[var(--muted)]">
        Outline
      </p>
      <h1 className="font-display text-4xl tracking-tight text-[var(--ink)] sm:text-5xl">
        Course
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--muted)]">
        {course.audience}. Lessons are short on purpose — read one, shoot the practice, then move on.
      </p>

      <ol className="mt-12 space-y-0 border-t border-[var(--line)]">
        {lessons.map((lesson) => (
          <li key={lesson.slug} className="border-b border-[var(--line)]">
            <Link
              href={`/course/${lesson.slug}`}
              className="group flex flex-col gap-2 py-6 transition-colors sm:flex-row sm:items-baseline sm:justify-between"
            >
              <div className="flex gap-4">
                <span className="font-mono text-sm text-[var(--muted)]">
                  {String(lesson.order).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-display text-2xl text-[var(--ink)] transition-colors group-hover:text-[var(--accent)]">
                    {lesson.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-[var(--muted)]">{lesson.summary}</p>
                </div>
              </div>
              <span className="pl-10 font-mono text-xs text-[var(--muted)] sm:pl-0">
                {lesson.durationMinutes} min
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
