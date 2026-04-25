"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"
import type { CaseStudy } from "@/lib/case-studies"
import { DustParticles } from "@/components/dust-particles"
import { cn } from "@/lib/utils"

type CaseStudyCardProps = {
  study: CaseStudy
  /** 1-indexed position in the presentation (used for the chip). */
  index: number
}

/**
 * One full-bleed case study card on the landing page. Image fades into the
 * dark brand-coloured background so the eye lands on the headline first,
 * with a "View Case Study" CTA pulling the user in.
 */
export function CaseStudyCard({ study, index }: CaseStudyCardProps) {
  const imageOnLeft = study.imageSide === "left"

  return (
    <section
      aria-labelledby={`study-${study.slug}-title`}
      className="relative isolate flex h-screen w-full items-center overflow-hidden text-[var(--alabaster)]"
      style={{ backgroundColor: study.brandBg }}
    >
      {/* Radial vignette pulling toward the alt brand colour */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: `radial-gradient(120% 80% at 50% 50%, ${study.brandBg} 0%, ${study.brandBgAlt} 100%)`,
        }}
      />

      <DustParticles count={50} color="#F6F4EE" intensity={0.55} />

      <div
        className={cn(
          "relative z-10 mx-auto grid w-full max-w-[1280px] gap-10 px-6 md:gap-14 md:px-10",
          // mobile: image first, content below; md+: side-by-side per imageSide
          "grid-cols-1 md:grid-cols-2 md:items-center",
        )}
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "relative aspect-[4/3] w-full",
            imageOnLeft ? "md:order-1" : "md:order-2",
          )}
        >
          {/* All cards crop their screenshots to a shared 4:3 box so every
              image renders at exactly the same height — taller dashboards
              like Fonda are cropped from the bottom. The radial mask was
              previously clipping the bottom corners of shorter screenshots
              (notably Automation Anywhere) so they appeared to lose their
              border-radius — we use a clean rounded card with a strong
              wraparound shadow instead. */}
          <div className="relative h-full w-full overflow-hidden rounded-xl shadow-[-24px_30px_60px_-20px_rgba(0,0,0,0.45),24px_30px_60px_-20px_rgba(0,0,0,0.45)]">
            <Image
              src={study.image}
              alt={study.imageAlt}
              fill
              priority={index <= 2}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className={cn(
            "flex flex-col gap-6",
            imageOnLeft ? "md:order-2" : "md:order-1",
          )}
        >
          <div className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-[var(--alabaster)]/65">
            <span className="font-mono text-sm">
              {String(index).padStart(2, "0")} / 06
            </span>
            <span className="h-px w-8 bg-[var(--alabaster)]/40" />
            Case Study
          </div>

          <h2
            id={`study-${study.slug}-title`}
            className="font-serif text-[clamp(2.25rem,4.5vw,3.5rem)] font-medium leading-[1.05] tracking-tight text-balance"
          >
            {study.shortTitle}
          </h2>

          <p className="max-w-[52ch] text-pretty text-base leading-relaxed text-[var(--alabaster)]/80 md:text-lg">
            {study.homeBlurb}
          </p>

          <div className="pt-2">
            <Link
              href={`/case-studies/${study.slug}`}
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--alabaster)] px-6 py-3 text-sm font-medium text-[var(--charcoal)] transition-all duration-300 hover:bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
            >
              View Case Study
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
