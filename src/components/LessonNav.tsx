import Link from "next/link";
import type { Lesson } from "@/content/types";

type LessonNavProps = {
  previous?: Lesson;
  next?: Lesson;
};

export function LessonNav({ previous, next }: LessonNavProps) {
  return (
    <div className="mt-16 flex flex-col gap-4 border-t border-[var(--line)] pt-8 sm:flex-row sm:justify-between">
      {previous ? (
        <Link
          href={`/course/${previous.slug}`}
          className="group text-sm text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
        >
          <span className="block text-xs uppercase tracking-[0.14em]">Previous</span>
          <span className="font-display text-lg text-[var(--ink)] group-hover:text-[var(--accent)]">
            {previous.title}
          </span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={`/course/${next.slug}`}
          className="group text-right text-sm text-[var(--muted)] transition-colors hover:text-[var(--ink)] sm:ml-auto"
        >
          <span className="block text-xs uppercase tracking-[0.14em]">Next</span>
          <span className="font-display text-lg text-[var(--ink)] group-hover:text-[var(--accent)]">
            {next.title}
          </span>
        </Link>
      ) : (
        <span />
      )}
    </div>
  );
}
