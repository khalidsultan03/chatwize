"use client"
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'

export default function HowItWorks() {
  const steps = [
    { number: 1, title: 'Connect Your WhatsApp', description: 'Link your business number to ChatWize.' },
    { number: 2, title: 'Choose a Template', description: 'Select from pre-built bot flows or customize.' },
    { number: 3, title: 'Launch and Grow', description: 'Start capturing leads and automating sales.' },
  ]

  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {steps.map((step, index) => (
            <motion.div key={index} className="flex-1" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.2 }}>
              <div className="text-center">
                <Badge variant="secondary" className="text-2xl font-bold mb-4">{step.number}</Badge>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
