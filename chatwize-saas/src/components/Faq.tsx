"use client"
import { motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function Faq() {
  const faqs = [
    { question: 'How does ChatWize integrate with WhatsApp?', answer: 'We use the official Meta WhatsApp Cloud API. You provide your credentials during onboarding.' },
    { question: 'Can I customize the bot flows?', answer: 'Yes, we use Botpress for flexible bot building and templates.' },
    { question: 'What about data privacy?', answer: 'All data is stored securely in Supabase with row-level security.' },
  ]

  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
