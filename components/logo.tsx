"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

type LogoProps = {
  /** Outer pixel size of the logo. */
  size?: number
  /** Stroke colour for all three Cs. */
  color?: string
  /** Continuous spin (used in the page loader). */
  animated?: boolean
  className?: string
}

/**
 * Three-Cs logo — three concentric C-shaped arcs that never touch.
 *
 *   - Inner ring: a regular C, opening to the right.
 *   - Middle ring: the same C, twisted clockwise.
 *   - Outer ring: the same C, twisted counter-clockwise.
 *
 * On hover, each ring performs a single slow revolution (each on its own axis).
 * In `animated` mode (loader) the rings spin continuously, in opposing
 * directions, while preserving the inner ring's "regular C" reading.
 */
export function Logo({
  size = 40,
  color = "currentColor",
  animated = false,
  className,
}: LogoProps) {
  // Each hover increments a counter, so each ring rotates forward by another
  // 360° — never reversing. This means the user can re-trigger the spin
  // simply by hovering off and back on.
  const [hovers, setHovers] = useState(0)

  // Static base rotations for the three rings.
  const BASE = { inner: 0, middle: 55, outer: -55 }

  const ringStyle = (base: number, animName: string) => {
    if (animated) {
      return { animation: `${animName} 4s linear infinite` }
    }
    return {
      transform: `rotate(${base + hovers * 360}deg)`,
      transition: "transform 1.6s cubic-bezier(0.22, 1, 0.36, 1)",
      transformOrigin: "50% 50%",
    }
  }

  return (
    <span
      aria-label="Steve Christians logo"
      className={cn("relative inline-block", className)}
      style={{ width: size, height: size }}
      onMouseEnter={() => !animated && setHovers((c) => c + 1)}
    >
      {/* Outer C — twisted counter-clockwise */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        style={ringStyle(BASE.outer, "spin-ccw")}
        aria-hidden="true"
      >
        <path
          d="M 76.9 23.1 A 38 38 0 1 0 76.9 76.9"
          fill="none"
          stroke={color}
          strokeWidth="3.4"
          strokeLinecap="round"
        />
      </svg>

      {/* Middle C — twisted clockwise */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        style={ringStyle(BASE.middle, "spin-cw")}
        aria-hidden="true"
      >
        <path
          d="M 68.4 31.6 A 26 26 0 1 0 68.4 68.4"
          fill="none"
          stroke={color}
          strokeWidth="3.4"
          strokeLinecap="round"
        />
      </svg>

      {/* Inner C — regular, opening to the right */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        style={ringStyle(BASE.inner, "spin-cw")}
        aria-hidden="true"
      >
        <path
          d="M 59.9 40.1 A 14 14 0 1 0 59.9 59.9"
          fill="none"
          stroke={color}
          strokeWidth="3.4"
          strokeLinecap="round"
        />
      </svg>
    </span>
  )
}
