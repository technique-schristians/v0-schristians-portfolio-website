import { Quote } from "lucide-react"
import type { CaseStudy } from "@/lib/case-studies"
import { CaseStudySection } from "./section"

/**
 * Research section. Two-column layout on desktop: narrative on the left,
 * pulled-quote panel on the right (filling 35-40% of the row).
 */
export function Research({ study }: { study: CaseStudy }) {
  return (
    <CaseStudySection tone="grey" eyebrow="Research" title="What we learned">
      <div className="grid gap-10 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-7">
          <p className="text-pretty text-lg leading-relaxed text-foreground/90 md:text-xl">
            {study.research.body}
          </p>
        </div>

        <aside className="md:col-span-5">
          <figure className="relative rounded-2xl border-2 border-[var(--teal)] bg-background p-7 shadow-[0_18px_40px_-20px_rgba(60,110,113,0.45)] md:p-9">
            <Quote
              aria-hidden="true"
              className="absolute -top-4 -left-2 h-9 w-9 rotate-180 rounded-full bg-[var(--teal)] p-2 text-[var(--alabaster)]"
              strokeWidth={2}
            />
            <blockquote className="font-serif text-xl font-medium leading-snug text-foreground md:text-2xl">
              &ldquo;{study.research.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Key Finding
            </figcaption>
          </figure>
        </aside>
      </div>
    </CaseStudySection>
  )
}
