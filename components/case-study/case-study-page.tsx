import type { CaseStudy } from "@/lib/case-studies"
import { TitleImage } from "./title-image"
import { Summary } from "./summary"
import { Approach } from "./approach"
import { Research } from "./research"
import { Strategy } from "./strategy"
import { Design } from "./design"
import { Outcome } from "./outcome"
import { CaseStudyFooter } from "./case-study-footer"

/**
 * Composes the full case study page from the section components.
 * Section backgrounds alternate white -> grey -> white -> grey... per the
 * whiteboard sketch.
 */
export function CaseStudyPage({ study }: { study: CaseStudy }) {
  return (
    <main className="relative">
      <TitleImage study={study} />
      <Summary study={study} />
      <Approach study={study} />
      <Research study={study} />
      <Strategy study={study} />
      <Design study={study} />
      <Outcome study={study} />
      <CaseStudyFooter study={study} />
    </main>
  )
}
