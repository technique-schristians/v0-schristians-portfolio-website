"use client"

import { motion } from "motion/react"
import type { CaseStudy } from "@/lib/case-studies"
import { CaseStudySection } from "./section"

/**
 * The Approach stepper. Horizontal on tablet+, vertical on mobile.
 * Each step is a numbered teal node with a connecting rail — larger and
 * more confident than the stock Material stepper, but still recognisably
 * Material in spirit.
 */
export function Approach({ study }: { study: CaseStudy }) {
  return (
    <CaseStudySection eyebrow="Approach" title="How I tackled it">
      <ApproachStepper steps={study.approach} />
    </CaseStudySection>
  )
}

function ApproachStepper({
  steps,
}: {
  steps: { label: string; description: string }[]
}) {
  return (
    <ol
      className="
        relative grid gap-8
        md:grid-cols-[repeat(var(--cols),minmax(0,1fr))]
      "
      style={{ ["--cols" as never]: steps.length }}
    >
      {/* Desktop horizontal rail */}
      <span
        aria-hidden="true"
        className="absolute left-0 right-0 top-7 hidden h-px bg-foreground/15 md:block"
      />

      {steps.map((step, i) => (
        <motion.li
          key={step.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.6,
            delay: i * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative flex gap-5 md:flex-col md:gap-4"
        >
          {/* Mobile vertical rail */}
          {i < steps.length - 1 && (
            <span
              aria-hidden="true"
              className="absolute left-7 top-14 bottom-[-2rem] w-px bg-foreground/15 md:hidden"
            />
          )}

          <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--teal)] text-[var(--alabaster)] shadow-[0_6px_18px_rgba(60,110,113,0.4)] md:h-14 md:w-14">
            <span className="font-mono text-base font-medium">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>

          <div className="flex flex-1 flex-col gap-2 pt-1 md:pt-2">
            <h3 className="font-serif text-xl font-medium leading-tight text-foreground md:text-2xl">
              {step.label}
            </h3>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
              {step.description}
            </p>
          </div>
        </motion.li>
      ))}
    </ol>
  )
}
