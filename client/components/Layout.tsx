import { Link, useLocation } from "react-router-dom";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
} from "@/components/ui/sidebar";
import {
  Shield,
  LayoutDashboard,
  CreditCard,
  FileText,
  Settings,
  HelpCircle,
} from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const loc = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return loc.pathname === "/";
    return loc.pathname.startsWith(path);
  };

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full bg-slate-50">
        <Sidebar className="border-r border-gray-200">
          <SidebarHeader className="p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">ZK-Pass</h1>
            </div>
          </SidebarHeader>

          <SidebarContent className="px-4">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/")}>
                  <Link to="/" className="flex items-center w-full gap-2">
                    <LayoutDashboard className="h-6 w-6" />
                    <span className="font-semibold">Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/credentials")}>
                  <Link
                    to="/credentials"
                    className="flex items-center w-full gap-2"
                  >
                    <CreditCard className="h-6 w-6" />
                    <span>Credentials</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/schemas")}>
                  <Link
                    to="/schemas"
                    className="flex items-center w-full gap-2"
                  >
                    <FileText className="h-6 w-6" />
                    <span>Schemas</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/settings")}>
                  <Link
                    to="/settings"
                    className="flex items-center w-full gap-2"
                  >
                    <Settings className="h-6 w-6" />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/help" className="flex items-center w-full gap-2">
                    <HelpCircle className="h-6 w-6" />
                    <span>Help</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>

        <SidebarInset className="flex-1">{children}</SidebarInset>
      </div>
    </SidebarProvider>
  );
}
