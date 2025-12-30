"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Tiers", href: "#tiers" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Reviews", href: "#reviews" },
  { name: "FAQ", href: "#faq" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Backdrop blur background */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md border-b border-[#be802d]/20" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.svg"
              alt="Terra Logo"
              width={40}
              height={53}
              className="drop-shadow-[0_0_10px_rgba(190,128,45,0.5)]"
            />
            <Image
              src="/images/terra2.svg"
              alt="Terra"
              width={120}
              height={25}
              className="hidden sm:block drop-shadow-[0_0_10px_rgba(190,128,45,0.5)]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-body text-sm text-white/70 hover:text-[#f5d485] transition-colors duration-200 tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="https://t.me/TeeroAppBot"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-lg bg-[linear-gradient(135deg,#be802d_0%,#d4a54a_100%)] text-black font-semibold text-sm tracking-wide hover:shadow-[0_0_20px_rgba(190,128,45,0.4)] transition-all duration-300 hover:scale-105 inline-block"
            >
              Get Started
            </a>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <a
              href="https://t.me/TeeroAppBot"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-[linear-gradient(135deg,#be802d_0%,#d4a54a_100%)] text-black font-semibold text-xs tracking-wide"
            >
              Get Started
            </a>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white/70 hover:text-[#f5d485] transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md border-b border-[#be802d]/20">
            <nav className="flex flex-col py-4 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-body text-base text-white/70 hover:text-[#f5d485] py-3 border-b border-white/10 last:border-0 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
