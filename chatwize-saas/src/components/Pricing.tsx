"use client"
import { motion } from 'framer-motion'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Pricing() {
  const plans = [
    { name: 'Free', price: '$0', features: ['Basic bots', '100 leads/mo', 'Email support'] },
    { name: 'Growth', price: '$49', features: ['Advanced bots', 'Unlimited leads', 'Priority support', 'Analytics'] },
    { name: 'Commerce+', price: '$99', features: ['All Growth features', 'E-commerce integration', 'Custom templates', 'Team access'] },
  ]

  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">Simple Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1 }}>
              <Card className="backdrop-blur-md bg-white/30 border-none shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <p className="text-4xl font-bold">{plan.price}<span className="text-sm">/mo</span></p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/signup">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
