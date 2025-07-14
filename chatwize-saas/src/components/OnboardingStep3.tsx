"use client"

import { Button } from "@/components/ui/button"
import Confetti from "react-confetti"
import { toast } from "sonner"
import { useEffect, useState } from "react"

export default function OnboardingStep3({ tenantId, onGoToDashboard }: { tenantId: string, onGoToDashboard: () => void }) {
  const [showConfetti, setShowConfetti] = useState(true)

  useEffect(() => {
    toast.success("You're ready to launch! 🎉")
    setTimeout(() => setShowConfetti(false), 4000)
  }, [])

  return (
    <div className="text-center space-y-8">
      {showConfetti && <Confetti />}
      <h2 className="text-2xl font-bold">All Set!</h2>
      <p className="text-lg">Your ManyChat WhatsApp bot is ready. You can now start capturing leads and automating sales.</p>
      <div className="bg-muted/50 rounded-lg p-4 text-left max-w-md mx-auto">
        <div><b>Tenant ID:</b> {tenantId}</div>
        <div><b>Bot Platform:</b> ManyChat</div>
        <div><b>Status:</b> Connected</div>
      </div>
      <Button size="lg" className="mt-4" onClick={onGoToDashboard}>Go to Dashboard</Button>
    </div>
  )
} 