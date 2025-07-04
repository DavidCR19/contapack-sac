import {
  Calendar,
  DonutIcon,
  Home,
  Inbox,
  Package,
  Search,
  Tag,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router";
import { NavUser } from "./nav-user";

// Menu items.
const items = [
  {
    title: "Inicio",
    url: "#",
    icon: Home,
  },
  {
    title: "Recepcion",
    url: "recepcion",
    icon: Inbox,
  },
  {
    title: "Produccion",
    url: "produccion",
    icon: Calendar,
  },
  {
    title: "Calidad",
    url: "calidad",
    icon: Search,
  },
  {
    title: "Anexo",
    url: "anexo",
    icon: DonutIcon,
  },
  {
    title: "Embarque",
    url: "embarque",
    icon: Package,
  },
  {
    title: "Etiqueta",
    url: "taetiqueta",
    icon: Tag,
  },
];

export function AppSidebar({ data }) {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <img src="/logo.svg" alt="Logo" className="w-6 h-6 pr-1" />
            ContaPack SAC
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={`/admin/${item.url}`}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data} />
      </SidebarFooter>
    </Sidebar>
  );
}
