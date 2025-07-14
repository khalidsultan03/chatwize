"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Info } from "lucide-react"

// Mocked templates (replace with ManyChat API fetch)
const templates = [
  {
    id: "lead-gen-basic",
    name: "Lead Gen Basic",
    description: "A simple WhatsApp lead capture flow.",
    preview: "/template-leadgen.png",
  },
  {
    id: "ecommerce-demo",
    name: "E-commerce Demo",
    description: "Product inquiry and order flow for shops.",
    preview: "/template-ecommerce.png",
  },
  {
    id: "booking-bot",
    name: "Booking Bot",
    description: "Appointment scheduling and reminders.",
    preview: "/template-booking.png",
  },
]

export default function OnboardingStep2({ tenantId, onNext, onBack }: { tenantId: string, onNext: (templateId: string) => void, onBack: () => void }) {
  const [selected, setSelected] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSelect = (id: string) => setSelected(id)

  const handleContinue = async () => {
    if (!selected) {
      toast.error("Please select a template.")
      return
    }
    setLoading(true)
    // TODO: Call ManyChat API to clone/install template for this tenant
    setTimeout(() => {
      setLoading(false)
      toast.success("Template installed!")
      onNext(selected)
    }, 1200)
  }

  return (
    <TooltipProvider>
      <div className="space-y-6">
        <div className="flex items-center mb-4">
          <h2 className="text-xl font-bold mr-2">Choose a Template</h2>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="w-4 h-4 text-accent" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Pick a ready-made ManyChat flow to get started. You can customize it later in your ManyChat dashboard.</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {templates.map((tpl) => (
            <Card key={tpl.id} className={`cursor-pointer border-2 ${selected === tpl.id ? 'border-accent' : 'border-transparent'}`} onClick={() => handleSelect(tpl.id)}>
              <CardHeader>
                <CardTitle>{tpl.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <img src={tpl.preview} alt={tpl.name} className="rounded mb-2 w-full h-32 object-cover" />
                <p className="text-sm text-muted-foreground">{tpl.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-between mt-8">
          <Button variant="outline" onClick={onBack}>Back</Button>
          <Button onClick={handleContinue} disabled={loading}>
            {loading ? "Installing..." : "Continue"}
          </Button>
        </div>
      </div>
    </TooltipProvider>
  )
} 