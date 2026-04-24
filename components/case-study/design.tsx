"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import type { CaseStudy } from "@/lib/case-studies"
import { CaseStudySection } from "./section"

/**
 * Design section. Two-column on desktop: copy on the left at ~60%, image
 * panel on the right at ~40%. Image fades softly into the page background
 * to echo the home-page treatment.
 */
export function Design({ study }: { study: CaseStudy }) {
  return (
    <CaseStudySection tone="grey" eyebrow="Design" title="Iteration to high-fidelity">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="flex flex-col gap-10 md:col-span-7">
          {study.design.map((phase, i) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col gap-3 border-l-2 border-[var(--teal)] pl-6"
            >
              <h3 className="font-serif text-xl font-medium leading-tight text-foreground md:text-2xl">
                {phase.phase}
              </h3>
              <p className="text-pretty leading-relaxed text-foreground/85 md:text-lg">
                {phase.body}
              </p>
            </motion.div>
          ))}

          <div className="pt-2">
            <Link
              href={study.extendedStudyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-[var(--charcoal)] px-6 py-3 text-sm font-medium text-[var(--charcoal)] transition-all duration-300 hover:bg-[var(--charcoal)] hover:text-[var(--alabaster)]"
            >
              View Design
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="md:col-span-5"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-background shadow-[0_18px_40px_-20px_rgba(53,53,53,0.25)]">
            <Image
              src={study.image}
              alt={study.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-top"
            />
            {/* soft fade into the alabaster background */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 55%, var(--alabaster) 100%)",
              }}
            />
          </div>
        </motion.div>
      </div>
    </CaseStudySection>
  )
}
