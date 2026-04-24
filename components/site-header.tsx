"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, X } from "lucide-react"
import { caseStudies } from "@/lib/case-studies"
import { Logo } from "@/components/logo"
import { cn } from "@/lib/utils"

/**
 * Site-wide header. Renders the three-Cs logo on the left, plus Home and
 * a Case Studies dropdown on the right. The header is mounted in the root
 * layout so every page picks it up — including the case study sub-pages.
 */
export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [csOpen, setCsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false)
    setCsOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-md bg-background/80 border-b border-border/60"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:px-10">
        <Link
          href="/"
          className="group inline-flex items-center gap-3 font-serif text-lg font-medium text-foreground"
        >
          <Logo size={36} className="text-foreground transition-transform duration-500 group-hover:rotate-12" />
          <span className="hidden sm:inline tracking-tight">Steve Christians</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          <Link
            href="/"
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              pathname === "/"
                ? "bg-foreground text-background"
                : "text-foreground/80 hover:bg-foreground/5",
            )}
          >
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setCsOpen(true)}
            onMouseLeave={() => setCsOpen(false)}
          >
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={csOpen}
              onClick={() => setCsOpen((v) => !v)}
              className={cn(
                "inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                pathname.startsWith("/case-studies")
                  ? "bg-foreground text-background"
                  : "text-foreground/80 hover:bg-foreground/5",
              )}
            >
              Case Studies
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-300",
                  csOpen && "rotate-180",
                )}
              />
            </button>

            <div
              className={cn(
                "absolute right-0 top-full w-72 origin-top-right pt-3 transition-all duration-200",
                csOpen
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-1 opacity-0",
              )}
            >
              <ul
                role="menu"
                className="overflow-hidden rounded-xl border border-border bg-background shadow-lg shadow-black/5"
              >
                {caseStudies.map((study) => (
                  <li key={study.slug} role="none">
                    <Link
                      href={`/case-studies/${study.slug}`}
                      role="menuitem"
                      className="block px-4 py-3 text-sm text-foreground/80 transition-colors hover:bg-[var(--alabaster)] hover:text-foreground"
                    >
                      {study.navTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 text-foreground transition-colors hover:bg-foreground/5 md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "md:hidden overflow-hidden border-b border-border bg-background transition-[max-height,opacity] duration-300",
          mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          <Link
            href="/"
            className="rounded-md px-3 py-2 text-sm font-medium text-foreground/90 hover:bg-[var(--alabaster)]"
          >
            Home
          </Link>
          <div className="px-3 pt-3 pb-1 text-xs uppercase tracking-wider text-foreground/50">
            Case Studies
          </div>
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="rounded-md px-3 py-2 text-sm text-foreground/90 hover:bg-[var(--alabaster)]"
            >
              {study.navTitle}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
