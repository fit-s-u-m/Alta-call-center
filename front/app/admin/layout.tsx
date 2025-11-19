"use client"

import * as React from "react"
import Link from "next/link"

import { useIsMobile } from "@/hooks/useMobile"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { useParams, usePathname } from "next/navigation"

function AdminNavigationMenu() {
  const isMobile = useIsMobile()
  const pathname = usePathname()
  console.log(pathname)

  return (
    <NavigationMenu viewport={isMobile} className="max-w-none sticky backdrop-blur-3xl z-50 top-0">
      <NavigationMenuList className="flex-wrap justify-center items-center">
        <NavigationMenuItem>
          <NavigationMenuLink className={`${pathname=="/admin"?"underline":""}`} asChild>
              <Link href="/admin">Statstics</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={`${pathname=="/admin/sentiment"?"underline":""}`} asChild>
              <Link href="/admin/sentiment">Sentiment</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={`${pathname=="/admin/followup"?"underline":""}`} asChild>
              <Link href="/admin/followup">Followup</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <section >
          <AdminNavigationMenu/>
          {children}
      </section>
  );
}
