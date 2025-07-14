"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, Tooltip as RechartTooltip, ResponsiveContainer } from "recharts"

const stats = [
  { label: "Leads Today", value: 12 },
  { label: "Leads This Week", value: 54 },
  { label: "Total Leads", value: 320 },
]

const data = [
  { date: "Mon", leads: 5 },
  { date: "Tue", leads: 8 },
  { date: "Wed", leads: 12 },
  { date: "Thu", leads: 7 },
  { date: "Fri", leads: 10 },
  { date: "Sat", leads: 6 },
  { date: "Sun", leads: 6 },
]

export default function HomeDashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label} className="text-center">
            <CardHeader>
              <CardTitle>{stat.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-accent">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="bg-white rounded-xl shadow-card p-6">
        <h2 className="text-lg font-semibold mb-4">Leads per Day</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <XAxis dataKey="date" />
            <YAxis allowDecimals={false} />
            <RechartTooltip />
            <Line type="monotone" dataKey="leads" stroke="#007AFF" strokeWidth={3} dot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
} 