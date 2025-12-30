import Link from "next/link"
import { Send } from "lucide-react"

export function CTAButtonsSection() {
  return (
    <section className="py-8 sm:py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-3">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
              Get Started?
            </span>
          </h2>
          <p className="text-zinc-400 text-lg">Launch the app or connect with us</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6">
          {/* Main App Button */}
          <Link
            href="https://t.me/TeeroAppBot"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-xl blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center justify-center gap-3 bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold px-8 py-4 rounded-xl hover:from-amber-300 hover:to-yellow-400 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z" />
              </svg>
              <span className="text-lg">Launch App</span>
            </div>
          </Link>

          {/* Social Buttons Container */}
          <div className="flex items-center gap-4">
            {/* Telegram Button */}
            <Link
              href="https://t.me/teeroapp"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 bg-zinc-900/80 border border-zinc-700 hover:border-amber-400/50 text-white font-medium px-6 py-4 rounded-xl transition-all duration-300 hover:bg-zinc-800"
            >
              <Send className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
              <span>Telegram</span>
            </Link>

            {/* X (Twitter) Button */}
            <Link
              href="https://x.com/teeroapp"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 bg-zinc-900/80 border border-zinc-700 hover:border-amber-400/50 text-white font-medium px-6 py-4 rounded-xl transition-all duration-300 hover:bg-zinc-800"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>X / Twitter</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
