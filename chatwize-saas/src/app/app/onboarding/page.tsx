"use client"

import { useState } from "react"
import { Progress } from "@/components/ui/progress"
import OnboardingStep1 from "@/components/OnboardingStep1"
import OnboardingStep2 from "@/components/OnboardingStep2"
import OnboardingStep3 from "@/components/OnboardingStep3"
import { useRouter } from "next/navigation"

const steps = [
  { label: "Connect ManyChat", component: OnboardingStep1 },
  { label: "Choose Template", component: OnboardingStep2 },
  { label: "Launch", component: OnboardingStep3 },
]

export default function OnboardingWizard() {
  const [step, setStep] = useState(0)
  const tenantId = "demo-tenant-id" // TODO: Replace with real tenant ID from session
  const router = useRouter()

  const nextStep = () => setStep((s) => Math.min(s + 1, steps.length - 1))
  const prevStep = () => setStep((s) => Math.max(s - 1, 0))
  const goToDashboard = () => router.push("/app/home")

  return (
    <div className="max-w-xl mx-auto py-16">
      <h1 className="text-3xl font-bold mb-8 text-center">Get Started</h1>
      <Progress value={((step + 1) / steps.length) * 100} className="mb-8" />
      <div className="flex justify-between mb-8">
        {steps.map((s, i) => (
          <div key={i} className={`flex-1 text-center ${i === step ? 'font-bold text-accent' : 'text-muted-foreground'}`}>{s.label}</div>
        ))}
      </div>
      <div className="bg-white rounded-xl shadow-card p-8">
        {step === 0 && <OnboardingStep1 tenantId={tenantId} onNext={nextStep} />}
        {step === 1 && <OnboardingStep2 tenantId={tenantId} onNext={nextStep} onBack={prevStep} />}
        {step === 2 && <OnboardingStep3 tenantId={tenantId} onGoToDashboard={goToDashboard} />}
      </div>
      <div className="flex justify-between mt-8">
        <button onClick={prevStep} disabled={step === 0} className="text-accent disabled:opacity-50">Back</button>
        <button onClick={nextStep} disabled={step === steps.length - 1} className="text-accent disabled:opacity-50">Next</button>
      </div>
    </div>
  )
} 