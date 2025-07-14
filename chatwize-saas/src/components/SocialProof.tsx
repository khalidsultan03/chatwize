"use client"
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Quote } from 'lucide-react'

export default function SocialProof() {
  const logos = ['logo1', 'logo2', 'logo3', 'logo4'] // Placeholder
  const testimonials = [
    { name: 'John Doe', company: 'Tech Co', quote: 'ChatWize transformed our lead generation!' },
    { name: 'Jane Smith', company: 'Sales Inc', quote: 'Easy to set up and incredibly effective.' },
  ]

  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">Trusted by Teams Worldwide</h2>
        <div className="flex justify-center gap-8 mb-16">
          {logos.map((logo, index) => (
            <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.1 }}>
              <div className="w-24 h-12 bg-gray-300" /> {/* Placeholder logo */}
            </motion.div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }}>
              <Card>
                <CardContent className="pt-6">
                  <Quote className="w-8 h-8 text-accent mb-4" />
                  <p className="mb-4">{testimonial.quote}</p>
                  <p className="font-semibold">{testimonial.name}, {testimonial.company}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
