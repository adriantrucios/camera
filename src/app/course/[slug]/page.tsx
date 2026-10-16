import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LessonNav } from "@/components/LessonNav";
import { getAdjacentLessons, getLesson, getLessons } from "@/content/lessons";

type LessonPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getLessons().map((lesson) => ({ slug: lesson.slug }));
}

export async function generateMetadata({
  params,
}: LessonPageProps): Promise<Metadata> {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) return { title: "Lesson" };
  return {
    title: lesson.title,
    description: lesson.summary,
  };
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) notFound();

  const { previous, next } = getAdjacentLessons(slug);

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-14 sm:py-20">
      <Link
        href="/course"
        className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
      >
        ← Course outline
      </Link>

      <p className="mt-8 font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
        Lesson {String(lesson.order).padStart(2, "0")} · {lesson.durationMinutes} min
      </p>
      <h1 className="font-display mt-3 text-4xl tracking-tight text-[var(--ink)] sm:text-5xl">
        {lesson.title}
      </h1>
      <p className="mt-4 text-lg leading-8 text-[var(--muted)]">{lesson.summary}</p>

      <div className="mt-12 space-y-10">
        {lesson.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-display text-2xl text-[var(--ink)]">{section.heading}</h2>
            <div className="mt-4 space-y-3 text-base leading-7 text-[var(--ink)]/90">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <LessonNav previous={previous} next={next} />
    </main>
  );
}
