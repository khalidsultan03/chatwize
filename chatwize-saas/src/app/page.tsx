import Hero from '@/components/Hero'
import Features from '@/components/Features'
import SocialProof from '@/components/SocialProof'
import HowItWorks from '@/components/HowItWorks'
import Pricing from '@/components/Pricing'
import Faq from '@/components/Faq'

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <SocialProof />
      <HowItWorks />
      <Pricing />
      <Faq />
    </main>
  )
}
