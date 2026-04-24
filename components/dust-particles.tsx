"use client"

import { useMemo } from "react"
import { cn } from "@/lib/utils"

type DustParticlesProps = {
  /** How many specs to float across the section. */
  count?: number
  /** Particle / glow colour. */
  color?: string
  /** Opacity multiplier (0 - 1). */
  intensity?: number
  className?: string
}

/**
 * Stranger-Things-style ambient floating dust. Generates a deterministic-ish
 * cloud of small specs animated by CSS keyframes. Renders absolutely
 * positioned, so drop this inside a relatively-positioned section.
 */
export function DustParticles({
  count = 40,
  color = "#ffffff",
  intensity = 0.5,
  className,
}: DustParticlesProps) {
  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      // Pseudo-random based on index so SSR + client match.
      const seed = (i + 1) * 9301
      const r = (n: number) => {
        const x = Math.sin(seed * (n + 1)) * 10000
        return x - Math.floor(x)
      }
      const size = 1.5 + r(1) * 3
      const top = r(2) * 100
      const left = r(3) * 100
      const duration = 14 + r(4) * 18
      const delay = -r(5) * duration
      const driftX = (r(6) - 0.5) * 80
      const driftY = -40 - r(7) * 160
      const op = (0.25 + r(8) * 0.55) * intensity

      return { size, top, left, duration, delay, driftX, driftY, op, key: i }
    })
  }, [count, intensity])

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      {particles.map((p) => (
        <span
          key={p.key}
          className="absolute rounded-full"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            background: color,
            boxShadow: `0 0 ${p.size * 3}px ${color}`,
            // @ts-expect-error CSS custom props for the keyframe
            "--dust-x": `${p.driftX}px`,
            "--dust-y": `${p.driftY}px`,
            "--dust-opacity": p.op,
            animation: `dust-drift ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}
