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

      <div className="mt-8 border-l-2 border-[var(--accent)] bg-[var(--paper-deep)]/60 px-5 py-4">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--muted)]">
          Goal
        </p>
        <p className="mt-2 text-base leading-7 text-[var(--ink)]">{lesson.goal}</p>
      </div>

      <div className="mt-12 space-y-12">
        {lesson.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-display text-2xl text-[var(--ink)]">{section.heading}</h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-[var(--ink)]/90">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}

        <section>
          <h2 className="font-display text-2xl text-[var(--ink)]">Tips</h2>
          <ul className="mt-4 space-y-3">
            {lesson.tips.map((tip) => (
              <li
                key={tip}
                className="flex gap-3 text-base leading-7 text-[var(--ink)]/90"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl text-[var(--ink)]">Examples</h2>
          <div className="mt-4 space-y-4">
            {lesson.examples.map((example) => (
              <article
                key={example.title}
                className="border border-[var(--line)] bg-[var(--paper)]/70 px-5 py-5"
              >
                <h3 className="font-display text-xl text-[var(--ink)]">{example.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  <span className="font-medium text-[var(--ink)]">Setup. </span>
                  {example.setup}
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  <span className="font-medium text-[var(--ink)]">Notice. </span>
                  {example.whatToNotice}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl text-[var(--ink)]">Takeaways</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-base leading-7 text-[var(--ink)]/90">
            {lesson.takeaways.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </section>

        <section className="border border-[var(--ink)]/15 bg-[var(--ink)] px-6 py-7 text-[var(--paper)]">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--paper)]/60">
            Practice
          </p>
          <h2 className="font-display mt-2 text-2xl">{lesson.practice.title}</h2>
          <p className="mt-3 text-base leading-7 text-[var(--paper)]/80">
            {lesson.practice.goal}
          </p>
          <ol className="mt-5 list-decimal space-y-2 pl-5 text-base leading-7 text-[var(--paper)]/90">
            {lesson.practice.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mt-5 border-t border-[var(--paper)]/20 pt-4 text-sm leading-6 text-[var(--paper)]/75">
            <span className="font-medium text-[var(--paper)]">Done when. </span>
            {lesson.practice.successLooksLike}
          </p>
        </section>
      </div>

      <LessonNav previous={previous} next={next} />
    </main>
  );
}
