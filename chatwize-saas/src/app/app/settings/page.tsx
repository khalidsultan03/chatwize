"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { toast } from "sonner"

export default function SettingsPage() {
  const [apiToken, setApiToken] = useState("sk_test_1234567890")
  const [aiFollowups, setAiFollowups] = useState(true)
  const [rotating, setRotating] = useState(false)

  const handleRotate = () => {
    setRotating(true)
    setTimeout(() => {
      setApiToken("sk_test_" + Math.random().toString(36).slice(2, 12))
      setRotating(false)
      toast.success("API token rotated!")
    }, 1200)
  }

  return (
    <div className="max-w-xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div><b>Email:</b> user@email.com</div>
            <div><b>Tenant:</b> Demo Tenant</div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>API Token</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-2">
            <span className="font-mono bg-muted px-2 py-1 rounded">{apiToken}</span>
            <Button size="sm" onClick={handleRotate} disabled={rotating}>{rotating ? "Rotating..." : "Rotate"}</Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>AI Follow-ups</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Switch checked={aiFollowups} onCheckedChange={setAiFollowups} />
            <span>{aiFollowups ? "Enabled" : "Disabled"}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 