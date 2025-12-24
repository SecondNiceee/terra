import Image from "next/image"

const characters = [
  {
    name: "YOUNG",
    deposit: "$1,000",
    fee: "15%",
    image: "/images/young.png",
  },
  {
    name: "TEEN",
    deposit: "$5,000",
    fee: "10%",
    image: "/images/teen.png",
  },
  {
    name: "ADULT",
    deposit: "$10,000",
    fee: "8%",
    image: "/images/adult.png",
  },
  {
    name: "BOSS",
    deposit: "$50,000",
    fee: "5%",
    image: "/images/boss.png",
  },
  {
    name: "GODFATHER",
    deposit: "$100,000",
    fee: "3%",
    image: "/images/godfather.png",
  },
]

const reviews = [
  {
    name: "Marcus T.",
    avatar: "/bearded-man-profile.png",
    rating: 5,
    text: "Started with YOUNG tier and now I'm a BOSS! The daily returns are incredible. Terra changed my financial game completely.",
    date: "2 days ago",
  },
  {
    name: "Elena K.",
    avatar: "/blonde-woman-profile.png",
    rating: 5,
    text: "Love how the withdrawal fees decrease as you level up. My tiger is definitely happy! Already at ADULT tier.",
    date: "5 days ago",
  },
  {
    name: "James W.",
    avatar: "/young-man-profile.png",
    rating: 5,
    text: "The GODFATHER tier is worth every penny. 1% daily returns with only 3% withdrawal fee? This is the future of passive income.",
    date: "1 week ago",
  },
  {
    name: "Sofia M.",
    avatar: "/woman-dark-hair-profile-photo.jpg",
    rating: 5,
    text: "I was skeptical at first but Terra delivered. Consistent earnings every single day. My tiger stays happy!",
    date: "1 week ago",
  },
]

export function CharactersSection() {
  return (
    <section id="tiers" className="relative min-h-screen w-full overflow-hidden">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.3)_100%)]" />

      {/* Decorative golden particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#be802d] rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header with Logo */}
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Image
              src="/images/logo.svg"
              alt="Terra Logo"
              width={60}
              height={80}
              className="drop-shadow-[0_0_15px_rgba(190,128,45,0.5)]"
            />
            <Image
              src="/images/terra.svg"
              alt="Terra"
              width={200}
              height={42}
              className="drop-shadow-[0_0_15px_rgba(190,128,45,0.5)]"
            />
          </div>

          <h1 className="font-heading text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#d4a54a_0%,#f5d485_50%,#be802d_100%)] drop-shadow-[0_2px_10px_rgba(190,128,45,0.3)] leading-tight max-w-4xl mb-4 tracking-[0.15em]">
            Earn 0.2% to 1% Daily
          </h1>
          <p className="font-body text-center text-xl sm:text-2xl text-[#d4a54a]/90 font-medium mb-6">
            on game characters
          </p>

          <div className="flex flex-col items-center">
            <p className="font-body text-center text-lg sm:text-xl text-white/70 italic">Your tiger is happy...</p>
            <p className="font-body text-center text-lg sm:text-xl text-[#f5d485] italic font-medium">
              when you take your time
            </p>
          </div>
        </div>

        {/* Characters Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {characters.map((char, index) => (
            <div
              key={char.name}
              className="group relative flex flex-col items-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Character Card */}
              <div className="relative w-full aspect-[3/4] mb-4 rounded-2xl bg-[linear-gradient(180deg,rgba(190,128,45,0.15)_0%,rgba(0,0,0,0.4)_100%)] border border-[#be802d]/30 p-2 transition-all duration-300 hover:scale-105 hover:border-[#d4a54a]/60 hover:shadow-[0_0_30px_rgba(190,128,45,0.3)]">
                <div className="relative w-full h-full flex items-end justify-center">
                  <Image
                    src={char.image || "/placeholder.svg"}
                    alt={char.name}
                    fill
                    className="object-contain object-bottom drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]"
                  />
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_0%,rgba(190,128,45,0.2),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Character Name */}
              <h3 className="font-heading text-lg sm:text-xl font-bold text-[#f5d485] mb-2 tracking-wider">
                {char.name}
              </h3>

              <div className="flex flex-col items-center gap-1 text-center">
                <div className="font-body text-sm sm:text-base">
                  <span className="text-white/60">Deposit: </span>
                  <span className="text-white font-semibold">{char.deposit}</span>
                </div>
                <div className="font-body text-sm sm:text-base">
                  <span className="text-white/60">Withdrawal Fee: </span>
                  <span className="text-[#4ade80] font-semibold">{char.fee}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center">
          <div className="h-px w-48 bg-[linear-gradient(90deg,transparent,#be802d,transparent)] mb-8" />
          <p className="font-body text-center text-white/50 text-sm max-w-2xl">
            The higher your character level — the lower the withdrawal fee
          </p>
        </div>

        <div id="reviews" className="mt-20">
          <h2 className="font-heading text-center text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#d4a54a_0%,#f5d485_50%,#be802d_100%)] mb-12 tracking-[0.15em]">
            What Our Players Say
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="relative p-6 rounded-2xl bg-[linear-gradient(180deg,rgba(190,128,45,0.1)_0%,rgba(0,0,0,0.4)_100%)] border border-[#be802d]/20 hover:border-[#d4a54a]/40 transition-all duration-300"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-[#be802d]/20 text-4xl font-serif">"</div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#f5d485]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-body text-white/80 text-sm mb-4 leading-relaxed">"{review.text}"</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <Image
                    src={review.avatar || "/placeholder.svg"}
                    alt={review.name}
                    width={40}
                    height={40}
                    className="rounded-full border border-[#be802d]/30"
                  />
                  <div>
                    <p className="font-body text-[#f5d485] font-medium text-sm">{review.name}</p>
                    <p className="font-body text-white/40 text-xs">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
