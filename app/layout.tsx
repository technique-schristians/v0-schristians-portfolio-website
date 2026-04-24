import type { Metadata } from "next"
import { Roboto, Roboto_Slab, Roboto_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SiteHeader } from "@/components/site-header"
import { PageLoader } from "@/components/page-loader"
import "./globals.css"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
})
const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-roboto-slab",
  display: "swap",
})
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Steve Christians — Senior Design Leader & AI Architect",
  description:
    "Twenty years of building 0-to-1 products across startups, B2B SaaS, and Salesforce. Specializing in AI-native UX, agentic workflows, and high-performing design teams.",
  generator: "v0.app",
  icons: {
    icon: "/icon.svg",
  },
}

export const viewport = {
  themeColor: "#353535",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${robotoSlab.variable} ${robotoMono.variable} bg-background`}
    >
      <body className="font-sans antialiased text-foreground">
        <PageLoader />
        <SiteHeader />
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
