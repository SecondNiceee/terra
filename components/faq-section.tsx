"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "How do I start earning?",
    answer:
      "Choose a character that fits your budget and activate it. Income is automatically credited to your balance every day.",
  },
  {
    question: "What is the minimum deposit?",
    answer:
      "The minimum deposit is $100 to activate a Trainee level character. The higher the character level, the greater the income percentage.",
  },
  {
    question: "How do I withdraw my earnings?",
    answer:
      "Withdrawals are available at any time through your personal account. The minimum withdrawal amount is $50. Funds are transferred to your wallet within 24 hours.",
  },
  {
    question: "Can I have multiple characters?",
    answer:
      "Yes, you can own multiple characters at the same time. Income from each character is accumulated in your balance.",
  },
  {
    question: "Is there a referral program?",
    answer:
      "Yes, invite friends and receive 5% of their first deposit. Referral bonuses are credited instantly after your referral activates a character.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
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
                className="w-full flex items-center justify-between p-5 text-left hover:bg-zinc-800/50 transition-colors"
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
                  <p className="px-5 pb-5 text-zinc-400 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
