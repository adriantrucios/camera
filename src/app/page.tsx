import Link from "next/link";
import { course, getLessons } from "@/content/lessons";

export default function Home() {
  const firstLesson = getLessons()[0];

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-6 py-16 sm:py-24">
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-[var(--muted)]">
        Beginner DSLR / mirrorless
      </p>
      <h1 className="font-display max-w-2xl text-5xl leading-[1.05] tracking-tight text-[var(--ink)] sm:text-7xl">
        {course.title}
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
        {course.tagline}
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <Link
          href={firstLesson ? `/course/${firstLesson.slug}` : "/course"}
          className="inline-flex items-center bg-[var(--ink)] px-5 py-3 text-sm font-medium text-[var(--paper)] transition-colors hover:bg-[var(--accent)]"
        >
          Start first lesson
        </Link>
        <Link
          href="/course"
          className="inline-flex items-center px-5 py-3 text-sm font-medium text-[var(--muted)] underline-offset-4 transition-colors hover:text-[var(--ink)] hover:underline"
        >
          View full outline
        </Link>
      </div>
    </main>
  );
}
