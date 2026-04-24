import Link from "next/link"
import { ClipboardList, ExternalLink } from "lucide-react"
import type { CaseStudy } from "@/lib/case-studies"
import { CaseStudySection } from "./section"

/**
 * Summary section. Pairs a Material-style clipboard icon with the project
 * title and the problem statement, then offers a "View Extended Study"
 * external CTA pointing at the long-form Figma / Slides deck.
 */
export function Summary({ study }: { study: CaseStudy }) {
  return (
    <CaseStudySection
      tone="grey"
      eyebrow="Summary"
      title={study.summary}
      icon={<ClipboardList className="h-6 w-6 md:h-7 md:w-7" strokeWidth={1.75} />}
    >
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-8">
          <h3 className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Problem
          </h3>
          <p className="text-pretty text-lg leading-relaxed text-foreground/90 md:text-xl">
            {study.problem}
          </p>
        </div>

        <div className="md:col-span-4 md:flex md:items-end md:justify-end">
          <Link
            href={study.extendedStudyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--charcoal)] px-6 py-3 text-sm font-medium text-[var(--alabaster)] transition-all duration-300 hover:bg-[var(--teal)] hover:shadow-[0_8px_30px_rgba(60,110,113,0.35)]"
          >
            View Extended Study
            <ExternalLink
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </CaseStudySection>
  )
}
