"use client"

import ReactMarkdown from "react-markdown"

const docs = `
# Help & Documentation

Welcome to ChatWize! Here are some common topics:

## How do I connect my WhatsApp?
Go to Onboarding and enter your ManyChat API token and Page ID. See [ManyChat docs](https://help.manychat.com).

## How do I install a template?
Go to Templates, click "Add New", and select a flow. You can customize it in ManyChat.

## How do I export leads?
Go to Leads and click "Export CSV".

## Need more help?
Contact support or use the chat widget below.
`

export default function HelpPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold mb-4">Help & Docs</h1>
      <div className="bg-white rounded-xl shadow-card p-6 prose">
        <ReactMarkdown>{docs}</ReactMarkdown>
      </div>
      <div className="mt-8">
        {/* Placeholder for chat widget */}
        <div className="w-full h-96 bg-muted flex items-center justify-center rounded-xl">
          <span className="text-muted-foreground">[Chat Widget Here]</span>
        </div>
      </div>
    </div>
  )
} 