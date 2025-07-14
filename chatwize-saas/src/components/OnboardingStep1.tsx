 'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Info } from 'lucide-react'
import { toast } from 'sonner'

export default function OnboardingStep1({ tenantId, onNext }: { tenantId: string, onNext: () => void }) {
  const [manychatToken, setManychatToken] = useState('')
  const [manychatPageId, setManychatPageId] = useState('')
  const [loading, setLoading] = useState(false)
  const supabase = createClientComponentClient()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const { error } = await supabase.from('service_accounts').insert({
      tenant_id: tenantId,
      manychat_api_token: manychatToken,
      manychat_page_id: manychatPageId,
    })
    setLoading(false)
    if (error) {
      toast.error('Failed to save credentials')
    } else {
      toast.success('Credentials connected!')
      onNext()
    }
  }

  return (
    <TooltipProvider>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="manychatToken">ManyChat API Token
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="w-4 h-4 inline ml-1" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Find your API token in ManyChat Settings &gt; API. See <a href="https://help.manychat.com" target="_blank">docs</a>.</p>
              </TooltipContent>
            </Tooltip>
          </Label>
          <Input id="manychatToken" value={manychatToken} onChange={(e) => setManychatToken(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor="manychatPageId">ManyChat Page ID
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="w-4 h-4 inline ml-1" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Your connected Facebook Page ID in ManyChat. Check your dashboard.</p>
              </TooltipContent>
            </Tooltip>
          </Label>
          <Input id="manychatPageId" value={manychatPageId} onChange={(e) => setManychatPageId(e.target.value)} required />
        </div>
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? 'Saving...' : 'Connect ManyChat'}
        </Button>
      </form>
    </TooltipProvider>
  )
} 