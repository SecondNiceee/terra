import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Teero - Игровые персонажи",
  description: "Зарабатывайте от 0.2% до 1% в день на игровых персонажах",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${montserrat.className} antialiased bg-black`}>
        <div
          className="fixed inset-0 -z-20 h-screen w-screen"
          style={{
            backgroundImage: "url(/images/steel-bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Overlay for depth */}
        <div className="fixed inset-0 -z-10 h-screen w-screen bg-black/30" />

        {/* Content wrapper */}
        <div className="relative z-0">{children}</div>
        <Analytics />
      </body>
    </html>
  )
}
