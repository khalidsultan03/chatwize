"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import Papa from "papaparse"

const leads = [
  { date: "2024-07-14", name: "John Doe", phone: "+1234567890", msg: "Interested in pricing", status: "new" },
  { date: "2024-07-14", name: "Jane Smith", phone: "+1987654321", msg: "Book a demo", status: "contacted" },
  { date: "2024-07-13", name: "Ali Hassan", phone: "+20123456789", msg: "Need more info", status: "new" },
]

export default function LeadsPage() {
  const handleExport = () => {
    const csv = Papa.unparse(leads)
    const blob = new Blob([csv], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "leads.csv"
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Leads</h1>
        <Button onClick={handleExport}>Export CSV</Button>
      </div>
      <div className="bg-white rounded-xl shadow-card p-4 overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Message</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leads.map((lead, i) => (
              <TableRow key={i}>
                <TableCell>{lead.date}</TableCell>
                <TableCell>{lead.name}</TableCell>
                <TableCell>{lead.phone}</TableCell>
                <TableCell>{lead.msg}</TableCell>
                <TableCell>{lead.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
} 