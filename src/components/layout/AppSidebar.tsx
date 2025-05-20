
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  PiggyBank,
  BarChart,
  Home,
  PieChart,
  Users,
  Calendar,
  Award,
  Settings,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function AppSidebar() {
  const [expanded, setExpanded] = useState(true);

  const mainMenuItems = [
    { name: "Dashboard", path: "/", icon: Home },
    { name: "Expenses", path: "/expenses", icon: PiggyBank },
    { name: "Budget", path: "/budget", icon: BarChart },
    { name: "Reports", path: "/reports", icon: PieChart },
    { name: "Goals", path: "/goals", icon: Award },
    { name: "Calendar", path: "/calendar", icon: Calendar },
    { name: "Social", path: "/social", icon: Users },
  ];

  return (
    <Sidebar className="border-r">
      <SidebarHeader className="py-6">
        <div className="flex items-center px-4">
          <div className="flex items-center gap-2 font-bold text-2xl text-budgetjoy-purple">
            {expanded && (
              <span className="animate-fade-in">
                Budget<span className="text-budgetjoy-pink">Joy</span>
              </span>
            )}
            {!expanded && <span>BJ</span>}
          </div>
          <SidebarTrigger asChild>
            <button className="ml-auto p-2 rounded-full hover:bg-gray-100">
              {expanded ? "←" : "→"}
            </button>
          </SidebarTrigger>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {mainMenuItems.map((item) => (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton asChild>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                      isActive
                        ? "bg-budgetjoy-purple text-white"
                        : "hover:bg-gray-100"
                    )
                  }
                >
                  <item.icon className="h-5 w-5" />
                  {expanded && <span>{item.name}</span>}
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <NavLink
                to="/settings"
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                    isActive
                      ? "bg-budgetjoy-purple text-white"
                      : "hover:bg-gray-100"
                  )
                }
              >
                <Settings className="h-5 w-5" />
                {expanded && <span>Settings</span>}
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <button className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 text-red-500 w-full text-left">
                <LogOut className="h-5 w-5" />
                {expanded && <span>Log out</span>}
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
