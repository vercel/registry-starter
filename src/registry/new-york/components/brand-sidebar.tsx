"use client";

import {
  AlertTriangle,
  BarChart2,
  Clock,
  Database,
  Home,
  LayoutGrid,
  MessageSquareText,
  MoreHorizontal,
  Plus,
  Table,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/registry/new-york/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  useSidebar,
} from "@/registry/new-york/ui/sidebar";

interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
  badge?: {
    text: string;
  };
}

interface SidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
  className?: string;
}

export function BrandSidebar({
  collapsed = false,
  onToggle,
  className,
}: SidebarProps) {
  const pathname = usePathname();
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  const mainNavItems: NavItem[] = [
    {
      title: "Home",
      href: "#",
      icon: <Home className="size-4" />,
    },
    {
      title: "Projects",
      href: "#projects",
      icon: <LayoutGrid className="size-4" />,
    },
    {
      title: "Databases",
      href: "#databases",
      icon: <Database className="size-4" />,
    },
    {
      title: "Tables",
      href: "#tables",
      icon: <Table className="size-4" />,
      badge: {
        text: "Beta",
      },
    },
    {
      title: "AI",
      href: "#ai",
      icon: <MessageSquareText className="size-4" />,
      badge: {
        text: "Alpha",
      },
    },
  ];

  const toolsNavItems: NavItem[] = [
    {
      title: "Alerts",
      href: "#alerts",
      icon: <AlertTriangle className="size-4" />,
    },
    {
      title: "Analytics",
      href: "#analytics",
      icon: <BarChart2 className="size-4" />,
    },
    {
      title: "History",
      href: "#history",
      icon: <Clock className="size-4" />,
    },
    {
      title: "More",
      href: "#more",
      icon: <MoreHorizontal className="size-4" />,
    },
  ];

  return (
    <Sidebar variant="sidebar" collapsible="icon" className="mt-16">
      <SidebarHeader>
        <div className={cn(isCollapsed ? "py-2" : "p-2")}>
          <Button className={cn(isCollapsed ? "h-8 w-8 p-0" : "w-full")}>
            <Plus className={cn("size-4", !isCollapsed && "mr-1")} />
            {!isCollapsed && <span>Create</span>}
          </Button>
        </div>
      </SidebarHeader>

      <SidebarContent>
        {/* Main Nav Items */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={
                      pathname === item.href ||
                      (pathname === "" && item.href === "/")
                    }
                    tooltip={item.title}
                  >
                    <Link href={item.href}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.badge && (
                    <SidebarMenuBadge>{item.badge.text}</SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* Tools Nav Items */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {toolsNavItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    tooltip={item.title}
                  >
                    <Link href={item.href}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.badge && (
                    <SidebarMenuBadge>{item.badge.text}</SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
