import Link from 'next/link'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu'
import { Home, Users, LayoutTemplate, Settings, CreditCard, HelpCircle, LogOut } from 'lucide-react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

export default function Sidebar() {
  const supabase = createClientComponentClient()
  const router = useRouter()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  return (
    <div className="w-64 h-screen bg-background border-r flex flex-col p-4">
      <div className="mb-8 text-2xl font-bold">ChatWize</div>
      <NavigationMenu orientation="vertical">
        <NavigationMenuList className="flex-col space-y-2">
          <NavigationMenuItem>
            <Link href="/app/home" legacyBehavior passHref>
              <NavigationMenuLink className="flex items-center space-x-2 p-2 rounded-md hover:bg-accent/10">
                <Home className="w-5 h-5" />
                <span>Home</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/app/leads" legacyBehavior passHref>
              <NavigationMenuLink className="flex items-center space-x-2 p-2 rounded-md hover:bg-accent/10">
                <Users className="w-5 h-5" />
                <span>Leads</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/app/templates" legacyBehavior passHref>
              <NavigationMenuLink className="flex items-center space-x-2 p-2 rounded-md hover:bg-accent/10">
                <LayoutTemplate className="w-5 h-5" />
                <span>Templates</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/app/settings" legacyBehavior passHref>
              <NavigationMenuLink className="flex items-center space-x-2 p-2 rounded-md hover:bg-accent/10">
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/app/billing" legacyBehavior passHref>
              <NavigationMenuLink className="flex items-center space-x-2 p-2 rounded-md hover:bg-accent/10">
                <CreditCard className="w-5 h-5" />
                <span>Billing</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/app/help" legacyBehavior passHref>
              <NavigationMenuLink className="flex items-center space-x-2 p-2 rounded-md hover:bg-accent/10">
                <HelpCircle className="w-5 h-5" />
                <span>Help</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="mt-auto">
        <button onClick={handleLogout} className="flex items-center space-x-2 p-2 rounded-md hover:bg-accent/10 w-full">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  )
}
