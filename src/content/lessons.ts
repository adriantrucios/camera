import type { Lesson } from "./types";

export const course = {
  title: "Camera",
  tagline: "A small course on taking better photos with a DSLR or mirrorless.",
  audience: "Beginners with a DSLR or mirrorless camera",
};

export const lessons: Lesson[] = [
  {
    slug: "know-your-camera",
    title: "Know your camera",
    summary:
      "Buttons, dials, modes, and the few settings you actually need on day one.",
    durationMinutes: 12,
    order: 1,
    sections: [
      {
        heading: "What this lesson covers",
        body: [
          "Find the mode dial, shutter button, and the dials that change aperture and shutter speed.",
          "Learn the difference between Auto, Program (P), Aperture Priority (A/Av), Shutter Priority (S/Tv), and Manual (M).",
          "For the rest of this course, we will mostly stay in A/Av and S/Tv.",
        ],
      },
      {
        heading: "Practice",
        body: [
          "Pick up your camera and switch through P, A/Av, S/Tv, and M. Note which dial changes aperture vs shutter in each mode.",
          "Take one photo in Auto so you have a baseline later.",
        ],
      },
    ],
  },
  {
    slug: "exposure-triangle",
    title: "The exposure triangle",
    summary:
      "Aperture, shutter speed, and ISO — how they work together to make a correct exposure.",
    durationMinutes: 18,
    order: 2,
    sections: [
      {
        heading: "The three controls",
        body: [
          "Aperture (f-number) controls how much light enters and how shallow the background blur is.",
          "Shutter speed controls how long the sensor sees light — and whether motion freezes or blurs.",
          "ISO brightens the image electronically. Higher ISO helps in low light but adds noise.",
        ],
      },
      {
        heading: "Practice",
        body: [
          "In A/Av mode, shoot the same scene at f/2.8 (or your widest) and f/8. Compare background blur.",
          "In S/Tv mode, shoot a moving subject at 1/1000s and 1/30s. Compare freeze vs blur.",
        ],
      },
    ],
  },
  {
    slug: "composition-basics",
    title: "Composition basics",
    summary:
      "Simple framing habits that make ordinary scenes look intentional.",
    durationMinutes: 15,
    order: 3,
    sections: [
      {
        heading: "Start with these",
        body: [
          "Rule of thirds: place the subject on a strong line or intersection, not always dead center.",
          "Leading lines: use roads, fences, or shadows to pull the eye toward the subject.",
          "Fill the frame: get closer (or zoom) so the photo is about one clear idea.",
        ],
      },
      {
        heading: "Practice",
        body: [
          "Take three photos of the same object: centered, rule-of-thirds, and tightly cropped.",
          "Pick your favorite and write one sentence about why it works.",
        ],
      },
    ],
  },
];

export function getLessons(): Lesson[] {
  return [...lessons].sort((a, b) => a.order - b.order);
}

export function getLesson(slug: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.slug === slug);
}

export function getAdjacentLessons(slug: string): {
  previous?: Lesson;
  next?: Lesson;
} {
  const ordered = getLessons();
  const index = ordered.findIndex((lesson) => lesson.slug === slug);
  if (index === -1) return {};

  return {
    previous: ordered[index - 1],
    next: ordered[index + 1],
  };
}
