import { Home, Inbox, Calendar, Search, Settings, User2, User, ChevronUp, Plus, Projector, ChevronDown, PlusIcon } from 'lucide-react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from './sidebar'
import Link from 'next/link'
import Image from 'next/image'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible'

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
                  {/* <SidebarMenuButton asChild> */}
                  <Link href={item.url} passHref legacyBehavior>
                    <a className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground">
                      <Icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </a>
                  </Link>
                  {/* </SidebarMenuButton> */}
                  {item.title==='Inbox' && (
                    <SidebarMenuBadge>24</SidebarMenuBadge>
                  ) }
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
        </SidebarGroup>
        <Collapsible defaultOpen className="group/collapsible">
        <SidebarGroup>
          <SidebarGroupLabel asChild>
            <CollapsibleTrigger>
            Collapsabile
            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
          </CollapsibleTrigger></SidebarGroupLabel>
          {/* <SidebarGroupAction>
            <Plus /> <span className="sr-only">Add Project</span>
          </SidebarGroupAction> */}
          <CollapsibleContent>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/#" >
                  <Projector/>
                  <span>See all projects</span>
                  </Link>

                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/#" >
                  <Plus/>
                  <span>Add Project</span>
                  </Link>

                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          </CollapsibleContent>
        </SidebarGroup>
        </Collapsible>
        <SidebarGroup>
          <SidebarGroupLabel>Nested items</SidebarGroupLabel>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/#" >
                  <Projector/>
                      Add Projects
                  </Link>

                </SidebarMenuButton>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href="/#" >
                      <Plus/>
                      Add Projects
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href="/#" >
                      <Plus/>
                      Add category
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>
             
            </SidebarMenu>

          </SidebarContent>
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