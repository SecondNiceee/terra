"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "What is the main purpose of this app?",
    answer:
      "Our app allows users to deposit funds and earn daily profits ranging from 0.25% to 1%. These deposits are used for trading operations across various exchanges, enabling users to generate returns.",
  },
  {
    question: "How can I deposit funds into the app?",
    answer:
      "You can deposit any amount you choose. Simply follow the instructions within the app to complete your deposit. We support various payment methods for your convenience.",
  },
  {
    question: "How does trading work and how do I earn profits?",
    answer:
      "We utilize your deposits to conduct trading operations on various exchanges, generating profits. Our team of experienced traders works to ensure consistent returns on your investment.",
  },
  {
    question: "How can I withdraw my funds?",
    answer:
      "Withdrawals can be made at any time through the app. Simply follow the on-screen instructions to complete your withdrawal. Processing times may vary based on your tier level.",
  },
  {
    question: "What is the withdrawal fee?",
    answer:
      "Withdrawal fees vary by tier: YOUNG tier has a 15% fee, ADULT tier 10%, BOSS tier 5%, and GODFATHER tier only 3%. Higher tiers enjoy lower fees.",
  },
  {
    question: "Are there any risks associated with using the app?",
    answer:
      "As with any investment, there are inherent risks. We recommend only investing funds you can afford to lose. However, our careful risk management strategies have allowed us to maintain positive results over our 5 years of operation.",
  },
  {
    question: "Where can I find additional information about the project?",
    answer:
      "For more information, please visit our official Telegram channel, where we regularly post updates and news about the project.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-6 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
              Questions
            </span>
          </h2>
          <p className="text-zinc-400 text-lg tracking-wider">ANSWERS TO COMMON QUESTIONS</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-zinc-800/50 transition-colors cursor-pointer"
              >
                <span className="text-white font-medium text-lg pr-4">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-amber-400 transition-transform duration-300 flex-shrink-0",
                    openIndex === index && "rotate-180",
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid transition-all duration-300",
                  openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pt-2 pb-5 text-zinc-400 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
