import { Home, Inbox, Calendar, Search, Settings, User2, User, ChevronUp } from 'lucide-react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from './sidebar'
import Link from 'next/link'
import Image from 'next/image'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'

// Create an icon map
const iconMap = {
  Home,
  Inbox,
  Calendar,
  Search,
  Settings
}

const items = [
  {
    title: 'Home',
    url: '/',
    icon: 'Home',
  },
  {
    title: 'Inbox',
    url: '#',
    icon: 'Inbox',
  },
  {
    title: 'Calendar',
    url: '#',
    icon: 'Calendar',
  },
  {
    title: 'Search',
    url: '#',
    icon: 'Search',
  },
  {
    title: 'Settings',
    url: '#',
    icon: 'Settings',
  },
]

export default function AppSidebar() {
  return (
    
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/" >
              <Image src="/logo.png" alt="Logo" width={100} height={50} className="h-8 w-auto" />
              <span>Gcs web </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarHeader>
       
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarMenu>
            {items.map((item) => {
              const Icon = iconMap[item.icon]
              return (
                <SidebarMenuItem key={item.title}>
                  <Link href={item.url} passHref legacyBehavior>
                    <a className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground">
                      <Icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </a>
                  </Link>
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter>
       
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton >
               <User2  /> Ansar <ChevronUp className='ml-auto'/>
                
              </SidebarMenuButton>

            </DropdownMenuTrigger>
            <DropdownMenuContent  align="end">
              <DropdownMenuItem>Account</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem >Logout</DropdownMenuItem>
            </DropdownMenuContent>

            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}