"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "What is the main purpose of the app?",
    answer:
      "Our app is designed for depositing and withdrawing funds with a profit calculation of 0.25% to 1% per day. We aim to provide our users with stable income by using their funds for trading on various exchanges.",
  },
  {
    question: "How can I deposit funds into the app?",
    answer:
      "You can deposit funds in any amount. Simply follow the instructions in the app to make a deposit. We accept various methods of depositing funds to ensure convenience for all users.",
  },
  {
    question: "How does trading work and how do I earn profits?",
    answer:
      "We use your funds for trading on various exchanges with the goal of generating overall profits. Our team of professional traders works to maximize the returns on your investments.",
  },
  {
    question: "How can I withdraw my funds?",
    answer:
      "Withdrawing funds can be done through the app interface. Follow the instructions to complete the withdrawal process. Please note that it may take some time to process the withdrawal.",
  },
  {
    question: "What is the withdrawal fee?",
    answer:
      "When withdrawing funds, we charge a fee of 15%. This fee is directed towards the development and maintenance of our platform.",
  },
  {
    question: "Are there any risks associated with using the app?",
    answer:
      "As with any investment project, there are risks involved. We recommend that you carefully review the terms and not invest more than you are willing to lose. Due to diversification and minimal risk strategies, we have not experienced negative results over a 5-year period.",
  },
  {
    question: "Where can I find additional information about the project?",
    answer: "You can find additional information about the project, updates, and news on our channels: X and Telegram.",
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
