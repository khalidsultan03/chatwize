import Sidebar from '@/components/Sidebar'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { RedirectType, redirect } from 'next/navigation'

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    redirect('/signup', RedirectType.replace)
  }

  // Check if onboarded, if not redirect to onboarding
  const { data: serviceAccount } = await supabase.from('service_accounts').select('*').eq('tenant_id', session.user.user_metadata.tenant_id).single()
  if (!serviceAccount) {
    redirect('/app/onboarding')
  }

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-8 overflow-auto">
        {children}
      </main>
    </div>
  )
} 