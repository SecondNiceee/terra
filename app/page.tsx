import { Header } from "@/components/header"
import { CharactersSection } from "@/components/characters-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { CTAButtonsSection } from "@/components/cta-buttons-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 sm:pt-20">
        <CharactersSection />
        <HowItWorksSection />
        <CTAButtonsSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}
