import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import DemoModal from './DemoModal'
import { useState } from 'react'

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="py-20 bg-gradient-to-b from-[#F7F7F7] to-[#FFFFFF]">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-bold mb-4">WhatsApp Leads, Automated.</h1>
          <p className="text-xl mb-8">Smarter sales with ChatWize—launch in minutes.</p>
          <video autoPlay loop muted playsInline className="max-w-md mx-auto mb-8 rounded-lg shadow-card">
            <source src="/hero.webm" type="video/webm" />
          </video>
          <div className="space-x-4">
            <Button asChild size="lg">
              <Link href="/signup">Start Free Trial</Link>
            </Button>
            <Button variant="outline" size="lg" onClick={() => setIsModalOpen(true)}>
              Watch Demo
            </Button>
          </div>
        </motion.div>
        <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </section>
  )
}
