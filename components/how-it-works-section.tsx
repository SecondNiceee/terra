import { Wallet, TrendingUp, ArrowDownToLine, Shield } from "lucide-react"

const steps = [
  {
    icon: Wallet,
    title: "Choose Your Tier",
    description: "Select a character tier based on your deposit amount. Higher tiers mean better benefits.",
  },
  {
    icon: TrendingUp,
    title: "Earn Daily Returns",
    description: "Receive 0.2% to 1% daily returns on your deposit. Watch your earnings grow every day.",
  },
  {
    icon: ArrowDownToLine,
    title: "Withdraw Anytime",
    description: "Cash out whenever you want. Lower tiers have higher fees, higher tiers enjoy minimal fees.",
  },
  {
    icon: Shield,
    title: "Level Up",
    description: "Increase your deposit to unlock higher tiers and enjoy lower withdrawal fees.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative w-full overflow-hidden py-20">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.5)_0%,transparent_50%,rgba(0,0,0,0.5)_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#d4a54a_0%,#f5d485_50%,#be802d_100%)] mb-4 tracking-[0.15em]">
            How It Works
          </h2>
          <div className="h-px w-32 mx-auto bg-[linear-gradient(90deg,transparent,#be802d,transparent)]" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Step number */}
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#be802d] flex items-center justify-center text-black font-bold text-sm z-10">
                {index + 1}
              </div>

              {/* Card */}
              <div className="h-full p-6 rounded-2xl bg-[linear-gradient(180deg,rgba(190,128,45,0.1)_0%,rgba(0,0,0,0.5)_100%)] border border-[#be802d]/20 hover:border-[#d4a54a]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(190,128,45,0.15)]">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-[linear-gradient(135deg,#be802d_0%,#d4a54a_100%)] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-7 h-7 text-black" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-lg font-bold text-[#f5d485] mb-3 tracking-wide">{step.title}</h3>
                <p className="font-body text-white/70 text-sm leading-relaxed">{step.description}</p>
              </div>

              {/* Connector line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-[linear-gradient(90deg,#be802d/50,transparent)]" />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col items-center">
          <div className="h-px w-48 bg-[linear-gradient(90deg,transparent,#be802d,transparent)] mb-8" />
          <p className="font-body text-center text-white/60 text-base max-w-lg">
            Start your journey today and let your tiger earn while you relax
          </p>
        </div>
      </div>
    </section>
  )
}
