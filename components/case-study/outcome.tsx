import { TrendingUp } from "lucide-react"
import type { CaseStudy } from "@/lib/case-studies"
import { CaseStudySection } from "./section"

/**
 * Outcome section. Mirrors the Research layout — narrative paired with a
 * stat block treated as a 35-40% accent panel, outlined and confident.
 */
export function Outcome({ study }: { study: CaseStudy }) {
  return (
    <CaseStudySection eyebrow="Outcome" title="What it added up to">
      <div className="grid gap-10 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-7">
          <p className="text-pretty text-lg leading-relaxed text-foreground/90 md:text-xl">
            {study.outcome.body}
          </p>
        </div>

        <aside className="md:col-span-5">
          <div className="relative flex h-full flex-col justify-between gap-6 rounded-2xl border-2 border-[var(--charcoal)] bg-[var(--charcoal)] p-8 text-[var(--alabaster)] shadow-[0_18px_40px_-20px_rgba(53,53,53,0.5)] md:p-10">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--teal)]">
              <TrendingUp className="h-5 w-5" strokeWidth={2} />
            </div>
            <p className="font-serif text-2xl font-medium leading-tight md:text-3xl">
              {study.outcome.stat}
            </p>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--alabaster)]/70">
              Key Statistic
            </span>
          </div>
        </aside>
      </div>
    </CaseStudySection>
  )
}
