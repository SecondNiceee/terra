import { Mail, Phone, MapPin, Send } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">G</span>
              </div>
              <span className="text-xl font-bold text-white">GameInvest</span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Your trusted platform for passive income through gaming characters. Start earning today with our proven
              investment system.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#tiers" className="text-zinc-400 hover:text-amber-400 transition-colors text-sm">
                  Character Tiers
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-zinc-400 hover:text-amber-400 transition-colors text-sm">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-zinc-400 hover:text-amber-400 transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-amber-400 transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-zinc-400 text-sm">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>support@gameinvest.io</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-400 text-sm">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-400 text-sm">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>123 Gaming Street, NY 10001</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-zinc-800 hover:bg-amber-500/20 border border-zinc-700 hover:border-amber-500/50 rounded-lg flex items-center justify-center transition-all"
              >
                <Send className="w-4 h-4 text-zinc-400 hover:text-amber-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-zinc-800 hover:bg-amber-500/20 border border-zinc-700 hover:border-amber-500/50 rounded-lg flex items-center justify-center transition-all"
              >
                <svg className="w-4 h-4 text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-zinc-800 hover:bg-amber-500/20 border border-zinc-700 hover:border-amber-500/50 rounded-lg flex items-center justify-center transition-all"
              >
                <svg className="w-4 h-4 text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
            </div>
            <p className="text-zinc-500 text-xs">Join our community for updates and exclusive offers.</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">© 2025 GameInvest. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-zinc-500 hover:text-amber-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-zinc-500 hover:text-amber-400 text-sm transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
