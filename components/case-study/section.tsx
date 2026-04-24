"use client"

import { motion } from "motion/react"
import { cn } from "@/lib/utils"

type SectionProps = {
  /** Tone alternates the background between white and light grey. */
  tone?: "white" | "grey"
  eyebrow?: string
  title?: string
  /** Optional Material-style icon shown next to the title. */
  icon?: React.ReactNode
  children: React.ReactNode
  className?: string
  id?: string
}

/**
 * Shared section shell for case study pages. Handles the alternating
 * white / light-grey background, eyebrow + title hierarchy, and a
 * subtle scroll-triggered reveal of the contents.
 */
export function CaseStudySection({
  tone = "white",
  eyebrow,
  title,
  icon,
  children,
  className,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-28",
        tone === "grey" ? "bg-[var(--alabaster)]" : "bg-background",
        className,
      )}
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        {(eyebrow || title) && (
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 flex flex-col gap-4 md:mb-16"
          >
            {eyebrow && (
              <div className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
                <span className="h-px w-10 bg-foreground/30" />
                {eyebrow}
              </div>
            )}
            {title && (
              <div className="flex items-center gap-4">
                {icon && (
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--teal)]/10 text-[var(--teal)] md:h-14 md:w-14">
                    {icon}
                  </span>
                )}
                <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-tight text-foreground">
                  {title}
                </h2>
              </div>
            )}
          </motion.header>
        )}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}
