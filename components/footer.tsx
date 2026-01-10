import { Mail, MapPin, Send } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.svg"
                alt="Teero Logo"
                width={40}
                height={53}
                className="drop-shadow-[0_0_10px_rgba(190,128,45,0.5)]"
              />
              <Image
                src="/images/terra2.svg"
                alt="Teero"
                width={100}
                height={20}
                className="drop-shadow-[0_0_10px_rgba(190,128,45,0.5)]"
              />
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed">
              A platform for earning passive income through game characters. Join thousands of users who are already
              growing their earnings daily.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#tiers"
                  className="text-zinc-400 hover:text-amber-400 transition-colors text-sm cursor-pointer"
                >
                  Character Tiers
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  className="text-zinc-400 hover:text-amber-400 transition-colors text-sm cursor-pointer"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-zinc-400 hover:text-amber-400 transition-colors text-sm cursor-pointer"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-amber-400 transition-colors text-sm cursor-pointer">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-zinc-400 text-sm">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>support@teero.io</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-400 text-sm">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>2847 Oakwood Drive, Austin, TX 78704</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="https://t.me/teeroapp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinc-800 hover:bg-amber-500/20 border border-zinc-700 hover:border-amber-500/50 rounded-lg flex items-center justify-center transition-all cursor-pointer"
              >
                <Send className="w-4 h-4 text-zinc-400 hover:text-amber-400" />
              </a>
            </div>
            <p className="text-zinc-500 text-xs">Join our community for the latest updates and exclusive offers.</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">© 2025 Teero. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-zinc-500 hover:text-amber-400 text-sm transition-colors cursor-pointer">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
