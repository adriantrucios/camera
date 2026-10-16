import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-[var(--line)] bg-[var(--paper)]/80 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-xl tracking-tight text-[var(--ink)]">
          Camera
        </Link>
        <nav className="flex items-center gap-6 text-sm text-[var(--muted)]">
          <Link href="/course" className="transition-colors hover:text-[var(--ink)]">
            Course
          </Link>
        </nav>
      </div>
    </header>
  );
}
