"use client"

import { LogOut, Moon, Settings, User } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button"
import { Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { SidebarTrigger } from "./sidebar"
import { useSidebar } from "./sidebar"


const Navbar = () => {

    const {theme, setTheme} = useTheme();
    const {toggleSidebar} = useSidebar();
  return (
    <nav className ="p-4 flex items-center justify-between border-b">
        {/* LEFT */}
        <SidebarTrigger/>
        {/* <Button variant = "outline" onClick = {toggleSidebar}>
             Custom Button</Button> */}
        CollapseButton

        {/* RIGHT */}
        <div className="flex items-center gap-4">

        {/* Theme Menu */}

         <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>




        <Link href="/">Dashboard</Link>
     
     {/* User Menu */}
<DropdownMenu>
  <DropdownMenuTrigger>
       <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

  </DropdownMenuTrigger>
  <DropdownMenuContent sideOffset={10}>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
        <User className="mr-2" /> Profile
    </DropdownMenuItem>
    <DropdownMenuItem>
        <Settings className="mr-2" /> Settings
    </DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
    <DropdownMenuItem variant="destructive">
        <LogOut className="mr-2" /> Logout
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

        </div>
    </nav>
  )
}

export default Navbar