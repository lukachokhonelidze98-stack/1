import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import { DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "HAN IT Solutions, LLC - Professional IT Services & Consulting",
  description:
    "Transform your business with cutting-edge technology solutions. Professional IT consulting, cloud services, cybersecurity, and system integration based in Miami, FL.",
  generator: "v0.app",
  keywords:
    "IT solutions, technology consulting, Miami IT services, business technology, cloud solutions, cybersecurity, system integration",
  authors: [{ name: "HAN IT Solutions, LLC" }],
  creator: "HAN IT Solutions, LLC",
  publisher: "HAN IT Solutions, LLC",
  robots: "index, follow",
  openGraph: {
    title: "HAN IT Solutions, LLC - Professional IT Services & Consulting",
    description:
      "Transform your business with cutting-edge technology solutions. Professional IT consulting and comprehensive services.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/apple-touch-icon.png",
        width: 180,
        height: 180,
        alt: "HAN IT Solutions Logo",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <head>{/* Removed redundant icon links */}</head>
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
