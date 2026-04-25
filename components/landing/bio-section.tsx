"use client"

import { ArrowDown, Pen, Layers, Compass, Frame, Sparkles, Search, MousePointer2, Palette, Ruler, SquareDashed, Component, Wand2 } from "lucide-react"
import { DustParticles } from "@/components/dust-particles"

/**
 * The bright, light-green opening section. Hosts the "Hello, I'm Steve" intro
 * synthesised from his LinkedIn summary plus the Stranger-Things-style dust
 * specs and a constellation of faded UX iconography behind the type.
 */
export function BioSection() {
  return (
    <section
      className="relative isolate flex h-screen w-full items-center overflow-hidden bg-[var(--teal)] text-[var(--alabaster)]"
      aria-labelledby="bio-heading"
    >
      {/* Faded iconography — careful, classy, not decorative noise */}
      <BackgroundIcons />

      <DustParticles count={50} color="#F6F4EE" intensity={0.4} />

      <div className="relative z-10 mx-auto flex w-full max-w-[1100px] flex-col gap-6 px-6 pt-40 pb-20 md:gap-7 md:px-10 md:pt-44 md:pb-24">
        <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-[var(--alabaster)]/70 md:text-sm">
          <span className="h-px w-10 bg-[var(--alabaster)]/60" />
          Portfolio · 2026
        </div>

        <h1
          id="bio-heading"
          className="font-serif text-[clamp(2rem,5.2vw,4.75rem)] font-medium leading-[1.05] tracking-tight text-balance"
        >
          Hi, I&rsquo;m Steve.
          <br />
          <span className="text-[var(--alabaster)]/85">
            A senior design leader and AI architect.
          </span>
        </h1>

        <p className="max-w-[60ch] text-pretty text-base leading-relaxed text-[var(--alabaster)]/85 md:text-lg">
          Twenty years building 0-to-1 products across startups, B2B SaaS, and Salesforce.
          I specialize in AI-native UX — agentic workflows, human-in-the-loop systems, and
          scalable design patterns. Player-coach by trade: I define product vision, run
          high-performing design teams, and ship the deep technical integrations that move
          revenue inside Commerce, Privacy, and Automation.
        </p>

        <div className="flex flex-wrap items-center gap-x-7 gap-y-2 pt-1 text-xs text-[var(--alabaster)]/75 md:text-sm">
          <Tag>Staff Product Designer</Tag>
          <Tag>Director of Design</Tag>
          <Tag>Teams of 1–6</Tag>
          <Tag>Enterprise SaaS</Tag>
        </div>

        <div className="mt-4 flex items-center gap-3 text-xs font-medium text-[var(--alabaster)]/80 md:mt-6 md:text-sm">
          <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
          <span className="uppercase tracking-[0.18em]">Scroll for case studies</span>
        </div>
      </div>
    </section>
  )
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 before:h-1 before:w-1 before:rounded-full before:bg-[var(--alabaster)]/60">
      {children}
    </span>
  )
}

/**
 * A scattered field of UX-craft icons rendered at 30% opacity.
 * Positioned with care so the type stays the hero — never decorative chaos.
 */
function BackgroundIcons() {
  const icons = [
    { Icon: Pen, top: "12%", left: "6%", size: 56, rotate: -12 },
    { Icon: Layers, top: "18%", right: "8%", size: 72, rotate: 14 },
    { Icon: Compass, top: "62%", left: "4%", size: 84, rotate: -8 },
    { Icon: Frame, bottom: "10%", right: "6%", size: 90, rotate: 8 },
    { Icon: Sparkles, top: "8%", left: "44%", size: 44, rotate: 0 },
    { Icon: Search, top: "70%", right: "20%", size: 56, rotate: -18 },
    { Icon: MousePointer2, bottom: "22%", left: "30%", size: 48, rotate: 22 },
    { Icon: Palette, top: "32%", right: "32%", size: 64, rotate: -6 },
    { Icon: Ruler, bottom: "8%", left: "12%", size: 60, rotate: 28 },
    { Icon: SquareDashed, top: "44%", left: "26%", size: 52, rotate: 6 },
    { Icon: Component, top: "26%", right: "44%", size: 56, rotate: -14 },
    { Icon: Wand2, bottom: "32%", right: "12%", size: 50, rotate: 18 },
  ]

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
      {icons.map(({ Icon, size, rotate, ...pos }, i) => (
        <Icon
          key={i}
          className="absolute text-[var(--alabaster)]"
          style={{
            ...pos,
            width: size,
            height: size,
            opacity: 0.3,
            transform: `rotate(${rotate}deg)`,
            strokeWidth: 1.25,
          }}
        />
      ))}
    </div>
  )
}
