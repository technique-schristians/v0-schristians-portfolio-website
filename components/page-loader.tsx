"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Logo } from "@/components/logo"

/**
 * A dark-green intro veil that displays the Logo (white, all three Cs spinning)
 * for ~1s on first paint of every route. Mounts the veil at the start of each
 * navigation, then fades it out so the page underneath gets its moment.
 */
export function PageLoader() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(true)
  const [fadingOut, setFadingOut] = useState(false)

  useEffect(() => {
    // On every path change, show the loader, then fade it out.
    setVisible(true)
    setFadingOut(false)

    const fadeTimer = setTimeout(() => setFadingOut(true), 900)
    const removeTimer = setTimeout(() => setVisible(false), 1500)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }
  }, [pathname])

  if (!visible) return null

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--teal-deep)] transition-opacity duration-500"
      style={{ opacity: fadingOut ? 0 : 1 }}
    >
      <Logo size={140} color="#ffffff" animated />
    </div>
  )
}
