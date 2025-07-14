"use client"
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Bot, MessageSquare, Zap, Users } from 'lucide-react'

export default function Features() {
  const features = [
    { icon: Bot, title: 'AI-Powered Bots', description: 'Intelligent chatbots that handle inquiries 24/7.' },
    { icon: MessageSquare, title: 'Seamless Integration', description: 'Connect with WhatsApp in minutes.' },
    { icon: Zap, title: 'Lead Generation', description: 'Capture and qualify leads automatically.' },
    { icon: Users, title: 'Team Collaboration', description: 'Share leads and insights with your team.' },
  ]

  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <feature.icon className="w-10 h-10 mx-auto text-accent mb-4" />
                  <CardTitle className="text-center">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
