import { caseStudies } from "@/lib/case-studies"
import { BioSection } from "./bio-section"
import { CaseStudyCard } from "./case-study-card"

/**
 * Stacked sticky sections — each child sits at top:0 / 100vh inside its own
 * scroll slot, so as the user scrolls every new section "slides up from the
 * bottom" over the previous one. Pure CSS, no scroll listener.
 */
export function LandingPresentation() {
  return (
    <main className="relative">
      <SectionSlot index={0}>
        <BioSection />
      </SectionSlot>

      {caseStudies.map((study, i) => (
        <SectionSlot key={study.slug} index={i + 1}>
          <CaseStudyCard study={study} index={i + 1} />
        </SectionSlot>
      ))}
    </main>
  )
}

function SectionSlot({
  index,
  children,
}: {
  index: number
  children: React.ReactNode
}) {
  return (
    <div
      className="sticky top-0 h-screen w-full"
      style={{ zIndex: index + 1 }}
    >
      {children}
    </div>
  )
}
