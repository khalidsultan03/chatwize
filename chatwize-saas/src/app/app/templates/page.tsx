"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { toast } from "sonner"

const installedTemplates = [
  { id: "lead-gen-basic", name: "Lead Gen Basic", description: "A simple WhatsApp lead capture flow." },
  { id: "ecommerce-demo", name: "E-commerce Demo", description: "Product inquiry and order flow for shops." },
]

const availableTemplates = [
  { id: "booking-bot", name: "Booking Bot", description: "Appointment scheduling and reminders." },
  { id: "survey-bot", name: "Survey Bot", description: "Collect feedback from customers." },
]

export default function TemplatesPage() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleAdd = () => {
    if (!selected) {
      toast.error("Please select a template.")
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setOpen(false)
      toast.success("Template added!")
      // TODO: Actually add to installedTemplates (mocked for now)
    }, 1200)
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Templates</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>Add New</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Select a Template</DialogTitle>
            </DialogHeader>
            <div className="grid md:grid-cols-2 gap-4">
              {availableTemplates.map((tpl) => (
                <Card key={tpl.id} className={`cursor-pointer border-2 ${selected === tpl.id ? 'border-accent' : 'border-transparent'}`} onClick={() => setSelected(tpl.id)}>
                  <CardHeader>
                    <CardTitle>{tpl.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{tpl.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-end mt-4">
              <Button onClick={handleAdd} disabled={loading}>{loading ? "Adding..." : "Add Template"}</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {installedTemplates.map((tpl) => (
          <Card key={tpl.id}>
            <CardHeader>
              <CardTitle>{tpl.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{tpl.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 