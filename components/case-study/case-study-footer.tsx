import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { caseStudies, type CaseStudy } from "@/lib/case-studies"

/**
 * Closing footer for each case study. Surfaces the next study in the deck
 * to keep the user moving through the portfolio.
 */
export function CaseStudyFooter({ study }: { study: CaseStudy }) {
  const currentIndex = caseStudies.findIndex((c) => c.slug === study.slug)
  const next = caseStudies[(currentIndex + 1) % caseStudies.length]

  return (
    <footer
      className="relative overflow-hidden text-[var(--alabaster)]"
      style={{ backgroundColor: next.brandBg }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: `radial-gradient(120% 80% at 50% 50%, ${next.brandBg} 0%, ${next.brandBgAlt} 100%)`,
        }}
      />
      <div className="relative mx-auto flex max-w-[1280px] flex-col gap-8 px-6 py-24 md:px-10 md:py-32">
        <span className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--alabaster)]/65">
          Next Case Study
        </span>
        <Link
          href={`/case-studies/${next.slug}`}
          className="group flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-12"
        >
          <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] font-medium leading-[1.05] tracking-tight text-balance transition-transform duration-500 group-hover:-translate-y-1">
            {next.fullTitle}
          </h2>
          <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--alabaster)] px-6 py-3 text-sm font-medium text-[var(--charcoal)] transition-all duration-300 group-hover:bg-white group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
            Continue reading
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </Link>
      </div>
    </footer>
  )
}
