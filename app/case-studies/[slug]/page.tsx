import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CaseStudyPage } from "@/components/case-study/case-study-page"
import { caseStudies, getCaseStudy } from "@/lib/case-studies"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) return {}
  return {
    title: `${study.fullTitle} — Steve Christians`,
    description: study.description,
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) notFound()
  return <CaseStudyPage study={study} />
}
