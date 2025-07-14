"use client"

export default function BillingPage() {
  return (
    <div className="max-w-xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold mb-4">Billing</h1>
      <div className="bg-white rounded-xl shadow-card p-6">
        <p className="mb-4">Manage your subscription and payment methods in the Stripe customer portal.</p>
        <iframe
          src="https://billing.stripe.com/p/login/test_1234567890" // TODO: Replace with real portal link
          className="w-full h-[600px] rounded border"
          title="Stripe Customer Portal"
        />
      </div>
    </div>
  )
} 