import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
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
  Menu,
  X,
} from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const loc = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") return loc.pathname === "/";
    return loc.pathname.startsWith(path);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-slate-50">
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="fixed top-4 left-4 z-50 flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-lg md:hidden"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5 text-gray-700" />
          ) : (
            <Menu className="h-5 w-5 text-gray-700" />
          )}
        </button>

        {/* Mobile Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            onClick={toggleMobileMenu}
          />
        )}

        {/* Desktop Sidebar */}
        <Sidebar className="border-r border-gray-200 hidden md:block">
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
                  <Link to="/" className="flex items-center w-full gap-2" onClick={handleLinkClick}>
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
                    onClick={handleLinkClick}
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
                    onClick={handleLinkClick}
                  >
                    <FileText className="h-6 w-6" />
                    <span>Schemas</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/templates")}>
                  <Link
                    to="/templates"
                    className="flex items-center w-full gap-2"
                    onClick={handleLinkClick}
                  >
                    <FileText className="h-6 w-6" />
                    <span>Templates</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/revocations")}>
                  <Link
                    to="/revocations"
                    className="flex items-center w-full gap-2"
                    onClick={handleLinkClick}
                  >
                    <HelpCircle className="h-6 w-6" />
                    <span>Revocations</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/settings")}>
                  <Link
                    to="/settings"
                    className="flex items-center w-full gap-2"
                    onClick={handleLinkClick}
                  >
                    <Settings className="h-6 w-6" />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/help" className="flex items-center w-full gap-2" onClick={handleLinkClick}>
                    <HelpCircle className="h-6 w-6" />
                    <span>Help</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 left-0 z-50 h-full w-80 bg-white shadow-xl transition-transform duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex h-full flex-col">
            {/* Mobile Sidebar Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h1 className="text-xl font-bold text-gray-900">ZK-Pass</h1>
              </div>
              <button
                onClick={toggleMobileMenu}
                className="h-8 w-8 rounded-lg bg-transparent flex items-center justify-center hover:bg-gray-100"
              >
                <X className="h-5 w-5 text-gray-700" />
              </button>
            </div>

            {/* Mobile Sidebar Content */}
            <nav className="flex-1 p-4">
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive("/") 
                        ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={handleLinkClick}
                  >
                    <LayoutDashboard className="h-5 w-5" />
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/credentials"
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive("/credentials")
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={handleLinkClick}
                  >
                    <CreditCard className="h-5 w-5" />
                    <span>Credentials</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/schemas"
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive("/schemas")
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={handleLinkClick}
                  >
                    <FileText className="h-5 w-5" />
                    <span>Schemas</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/templates"
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive("/templates")
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={handleLinkClick}
                  >
                    <FileText className="h-5 w-5" />
                    <span>Templates</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/revocations"
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive("/revocations")
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={handleLinkClick}
                  >
                    <HelpCircle className="h-5 w-5" />
                    <span>Revocations</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/settings"
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive("/settings")
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={handleLinkClick}
                  >
                    <Settings className="h-5 w-5" />
                    <span>Settings</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/help"
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive("/help")
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={handleLinkClick}
                  >
                    <HelpCircle className="h-5 w-5" />
                    <span>Help</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <SidebarInset className="flex-1 md:pl-0">
          <div className="flex flex-col h-full">
            {children}
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}