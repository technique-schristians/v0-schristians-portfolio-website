import { ListChecks } from "lucide-react"
import type { CaseStudy } from "@/lib/case-studies"
import { CaseStudySection } from "./section"

/**
 * Strategy section. Material-style "checklist with arrow" icon paired with
 * the strategic narrative built on top of research findings.
 */
export function Strategy({ study }: { study: CaseStudy }) {
  return (
    <CaseStudySection
      eyebrow="Strategy"
      title="From insight to roadmap"
      icon={<ListChecks className="h-6 w-6 md:h-7 md:w-7" strokeWidth={1.75} />}
    >
      <p className="max-w-[72ch] text-pretty text-lg leading-relaxed text-foreground/90 md:text-xl">
        {study.strategy}
      </p>
    </CaseStudySection>
  )
}
