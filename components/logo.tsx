import { cn } from "@/lib/utils"

type LogoProps = {
  /** Outer pixel size of the logo. */
  size?: number
  /** Stroke colour for all three Cs. */
  color?: string
  /** Animate each ring (used in the page loader). */
  animated?: boolean
  className?: string
  /** Static rotation for the outer rings when not animated. */
  staticOuterRotation?: number
  staticInnerRotation?: number
}

/**
 * Three-Cs logo — a tight inner C and two larger Cs orbiting around it,
 * each rotated to a different angle so they read as motion at rest.
 */
export function Logo({
  size = 40,
  color = "currentColor",
  animated = false,
  className,
  staticOuterRotation = 115,
  staticInnerRotation = 35,
}: LogoProps) {
  // We render at a 100x100 viewBox and let the wrapper scale it.
  return (
    <span
      aria-label="Steve Christians logo"
      className={cn("relative inline-block", className)}
      style={{ width: size, height: size }}
    >
      {/* Outer C — largest, rotates clockwise when animated, otherwise tilted ~115deg */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0"
        style={{
          width: "100%",
          height: "100%",
          transform: animated ? undefined : `rotate(${staticOuterRotation}deg)`,
          animation: animated ? "spin-cw 4.5s linear infinite" : undefined,
        }}
        aria-hidden="true"
      >
        <path
          d="M 82 50 A 32 32 0 1 0 50 82"
          fill="none"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>

      {/* Middle C — rotates counter-clockwise when animated, tilted ~35deg at rest */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0"
        style={{
          width: "100%",
          height: "100%",
          transform: animated ? undefined : `rotate(${staticInnerRotation}deg)`,
          animation: animated ? "spin-ccw 3.5s linear infinite" : undefined,
        }}
        aria-hidden="true"
      >
        <path
          d="M 72 50 A 22 22 0 1 0 50 72"
          fill="none"
          stroke={color}
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>

      {/* Inner C — standard orientation, rotates clockwise when animated */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0"
        style={{
          width: "100%",
          height: "100%",
          animation: animated ? "spin-cw 2.5s linear infinite" : undefined,
        }}
        aria-hidden="true"
      >
        <path
          d="M 64 38 A 14 14 0 1 0 64 62"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </span>
  )
}
