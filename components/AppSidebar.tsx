import { Calendar, ChevronUp, Folder, Home, Plus, Projector, User2, Users } from "lucide-react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupLabel, SidebarHeader, SidebarMenu } from "./ui/sidebar"
import { SidebarGroupContent } from "./ui/sidebar"
import { SidebarMenuItem } from "./ui/sidebar"
import Link from "next/link"
import { SidebarMenuButton } from "./ui/sidebar"
import Image from "next/image"
import { DropdownMenu } from "@radix-ui/react-dropdown-menu"
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"

const items = [
    {title: "Dashboard", url: "/", icon: Home,},
    {title: "Team", url: "/team", icon: Users,},
    {title: "Projects", url: "/projects", icon: Folder,},
    {title: "Calendar", url: "/calendar", icon: Calendar,},
]

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
       <SidebarHeader title="My App"className="py-4"/> 
       <SidebarMenu>
        <SidebarMenuItem> 
            <SidebarMenuButton asChild>
                <Link href = "/">
                    <Home className="mr-2 h-4 w-4" />
                    <Image src="/logo.svg" alt ="logo" width ={20} height = {20}></Image>
                    <span> Home</span>
                </Link>
            </SidebarMenuButton>
        </SidebarMenuItem>
       </SidebarMenu>

       <SidebarContent> 
        <SidebarGroup>
            <SidebarGroupLabel> Application</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map(item => (
                        <SidebarMenuItem key= {item.title}> 
                        
                        <SidebarMenuButton asChild>
                            <Link href={item.url}>
                            <item.icon className="mr-2 h-4 w-4" />
                            <span> {item.title}</span>
                            </Link>
                
                        </SidebarMenuButton>
                        </SidebarMenuItem> 
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel> Projects</SidebarGroupLabel>
          <SidebarGroupAction> 
            <Plus/> <span className="sr-only"> </span>
          </SidebarGroupAction>
           
          <SidebarGroupContent>
            <SidebarMenu>
                <SidebarMenuItem> 
                    <SidebarMenuButton asChild>
                        <Link href ="/#">
                         <Projector/> See all projects
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>

                   <SidebarMenuItem> 
                    <SidebarMenuButton asChild>
                        <Link href ="/#">
                         <Plus/> Add projects
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>


       </SidebarContent>

       <SidebarFooter>
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu> 
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton> 
                            <User2/> Oswin Herman <ChevronUp className = "ml-auto"/>
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align = "end">
                        <DropdownMenuItem>Account</DropdownMenuItem>
                        <DropdownMenuItem>Setting</DropdownMenuItem>
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
       </SidebarFooter>

    </Sidebar>
  )
}

export default AppSidebar