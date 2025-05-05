import { LogOut, Moon, Settings, SquareMenu, SquarePlus, User } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  

import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

export default function Navbar() {
  return (
    <nav className='flex  items-center justify-between p-4'>
        collapseButton
        <div className='flex items-center gap-4'>
            <Link href="/">Dashboard</Link>
            <Moon className="" />
            
            <DropdownMenu>
                             <DropdownMenuTrigger><Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
            </Avatar></DropdownMenuTrigger>
                             <DropdownMenuContent sideOffset={10} >
                               <DropdownMenuLabel>My Account</DropdownMenuLabel>
                               <DropdownMenuSeparator />
                               <DropdownMenuItem>
                                <User className='h-[1.2rem] w-[1.2rem] mr-2'/> Profile
                               </DropdownMenuItem>
                               <DropdownMenuItem>
                                <Settings className='h-[1.2rem] w-[1.2rem] mr-2'/> Settings
                               </DropdownMenuItem>
                               <DropdownMenuItem  variant='destructive'><LogOut className='h-[1.2rem] w-[1.2rem] mr-2'/> Logout
                               </DropdownMenuItem>
                                {/* <DropdownMenuItem>Subscription</DropdownMenuItem> */}
                                </DropdownMenuContent>
            </DropdownMenu>




           
        </div>
    </nav>
  )
}

// {/* <DropdownMenu>
//              <DropdownMenuTrigger asChild>
//                 <Button variant="outline" size="icon">
//                     <SquareMenu className=''/> 
//                     <span className='sr-only'>Open Menu</span> 
//                 </Button>
//              </DropdownMenuTrigger>
//              <DropdownMenuContent>
//              <DropdownMenuLabel>My Account</DropdownMenuLabel>
//              <DropdownMenuSeparator />
//             <DropdownMenuItem>item 1</DropdownMenuItem>
//             <DropdownMenuItem>item 2</DropdownMenuItem>
//             <DropdownMenuItem>item 3</DropdownMenuItem>
//             {/* <DropdownMenuItem>Subscription</DropdownMenuItem> */}
//              </DropdownMenuContent>
// </DropdownMenu> */}