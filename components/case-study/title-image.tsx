"use client"

import Image from "next/image"
import { motion } from "motion/react"
import type { CaseStudy } from "@/lib/case-studies"

/**
 * Title + Image hero. Image is rendered at full container width (capped at
 * 1440px by the wrapping container) and a fixed crop-height that scales
 * down responsively. Uses object-cover so the screenshots crop cleanly.
 */
export function TitleImage({ study }: { study: CaseStudy }) {
  return (
    <section className="bg-background pt-32 md:pt-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
            <span className="h-px w-10 bg-foreground/40" />
            Case Study
          </div>
          <h1 className="font-serif text-[clamp(2.25rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-tight text-balance text-foreground">
            {study.fullTitle}
          </h1>
          <p className="max-w-[68ch] text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            {study.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="mt-12 overflow-hidden rounded-2xl border border-border bg-[var(--alabaster)] shadow-[0_24px_60px_-20px_rgba(53,53,53,0.25)] md:mt-16"
        >
          <div className="relative aspect-[16/10] w-full md:aspect-[16/9]">
            <Image
              src={study.image}
              alt={study.imageAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1440px) 100vw, 1440px"
              className="object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
