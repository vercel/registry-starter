"use client";

import { HelpCircle, Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Avatar, AvatarFallback } from "@/registry/new-york/ui/avatar";
import { Button } from "@/registry/new-york/ui/button";
import { Input } from "@/registry/new-york/ui/input";
import { useSidebar } from "@/registry/new-york/ui/sidebar";

import { Logo } from "@/registry/new-york/components/logo";

export function BrandHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { state, toggleSidebar } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <header className="fixed z-50 w-full border-border border-b bg-background">
      <div className="flex h-16 items-center justify-between px-2">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="hidden size-8 md:flex"
            onClick={toggleSidebar}
          >
            {isCollapsed ? (
              <Menu className="size-4" />
            ) : (
              <X className="size-4" />
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="size-8 md:hidden"
            onClick={toggleSidebar}
          >
            <Menu className="size-4" />
          </Button>

          <Link href="/" className="flex items-center">
            <Logo />
          </Link>
        </div>

        <div className="hidden items-center space-x-1 md:flex">
          {isSearchOpen ? (
            <div className="relative">
              <Input
                type="text"
                placeholder="Search"
                className="h-9 w-64 pl-9"
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
              />
              <Search className="absolute top-2.5 left-3 size-4 text-foreground" />
            </div>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              className="text-foreground"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="mr-2 size-4" />
              Search
            </Button>
          )}

          <Button variant="ghost" size="sm" className="text-foreground">
            <HelpCircle className="mr-2 size-4" />
            Support
          </Button>

          <Button variant="ghost" size="sm" className="text-foreground">
            Upgrade Trial
          </Button>

          <Avatar className="size-8">
            <AvatarFallback className="bg-primary text-primary-foreground">
              <span className="text-xs">ME</span>
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="flex gap-2 md:hidden">
          <Button variant="ghost" size="sm" className="text-foreground">
            <Search className="h-5 w-5" />
          </Button>
          <Avatar className="size-8">
            <AvatarFallback className="bg-primary text-primary-foreground">
              <span className="text-xs">ME</span>
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
