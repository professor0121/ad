"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useState } from "react"
import {
  BarChart3,
  Home,
  LayoutDashboard,
  Shield,
  Store,
  ShieldAlert,
  Settings,
  Lightbulb,
  FileWarning,
  CreditCard,
  ChevronDown,
  ChevronRight
} from "lucide-react"

const items = [
  { name: "Home", icon: Home, href: "/" },
  { name: "Ads", icon: LayoutDashboard, href: "/ads" },
  { name: "Sites", icon: Store, href: "/sites" },
  { name: "Privacy and messaging", icon: Shield, href: "/privacy-and-messaging" },
  {
    name: "Brand Safety",
    icon: ShieldAlert,
    href: "/brand-safety",
    subItems: [
      { name: "Content", items: ["Ad review centre", "Blocking controls"] },
      { name: "Search", items: ["Blocking controls"] }
    ]
  },
  { name: "Reports", icon: BarChart3, href: "/reports" },
  {
    name: "Optimisation",
    icon: Lightbulb,
    href: "/optimisation",
    subItems: [
      { name: "Opportunities", href: "/optimisation/opportunities" },
      { name: "Experiments", href: "/optimisation/experiments" },
      { name: "Labs", href: "/optimisation/labs" }
    ]
  },
  { name: "Policy Centre", icon: FileWarning, href: "/policy-center" },
  {
    name: "Payments",
    icon: CreditCard,
    href: "/payments",
    subItems: [
      { name: "Payment Info", href: "/payments/payment-info" },
      { name: "Verification Check", href: "/payments/verification-check" }
    ]
  },
  {
    name: "Account",
    icon: Settings,
    href: "/account",
    subItems: [
      {
        name: "Settings",
        items: ["Account Information", "Personal Settings"]
      },
      {
        name: "Access and Authorization",
        items: [
          { name: "Crawler Access", href: "/account/access-and-authorization/crawler-access" },
          { name: "Third Parties", href: "/account/access-and-authorization/third-parties" },
          { name: "Google Analytics Integration", href: "/account/access-and-authorization/google-analytics-integration" }
        ]
      }
    ]
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([])
  const [openNestedDropdowns, setOpenNestedDropdowns] = useState<string[]>([])

  const toggleDropdown = (name: string) => {
    setOpenDropdowns(prev => 
      prev.includes(name) 
        ? prev.filter(item => item !== name)
        : [...prev, name]
    )
  }
  
  const toggleNestedDropdown = (name: string) => {
    setOpenNestedDropdowns(prev => 
      prev.includes(name) 
        ? prev.filter(item => item !== name)
        : [...prev, name]
    )
  }

  return (
    <nav className="flex flex-col gap-4 p-4">
      {items.map((item) => (
        <div key={item.name}>
          {item.subItems ? (
            <button
              onClick={() => toggleDropdown(item.name)}
              className={cn(
                "w-full flex items-center justify-between rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
                pathname.startsWith(item.href) ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50" : ""
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon className="h-5 w-5" />
                {item.name}
              </div>
              {openDropdowns.includes(item.name) ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>
          ) : (
            <Link
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
                pathname === item.href ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50" : ""
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          )}
          {item.subItems && (
            <div className={cn(
              "ml-8 mt-2 space-y-1 overflow-hidden transition-all",
              openDropdowns.includes(item.name) ? "max-h-96" : "max-h-0"
            )}>
              {item.subItems.map((subItem) => (
                <div key={subItem.name} className="space-y-1">
                  {subItem.items ? (
                    <>
                      <button
                        onClick={() => toggleNestedDropdown(subItem.name)}
                        className="w-full flex items-center justify-between rounded-lg py-1.5 px-3 text-sm text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                      >
                        <span className="font-medium">{subItem.name}</span>
                        {openNestedDropdowns.includes(subItem.name) ? (
                          <ChevronDown className="h-3 w-3" />
                        ) : (
                          <ChevronRight className="h-3 w-3" />
                        )}
                      </button>
                      <div className={cn(
                        "ml-3 space-y-1 overflow-hidden transition-all",
                        openNestedDropdowns.includes(subItem.name) ? "max-h-96" : "max-h-0"
                      )}
                      >
                        {subItem.items?.map((dropdownItem) => (
                          typeof dropdownItem === 'string' ? (
                            <Link
                              key={dropdownItem}
                              href={`${item.href}/${subItem.name.toLowerCase()}/${dropdownItem.toLowerCase().replace(/\s+/g, '-')}`}
                              className={cn(
                                "block rounded-lg py-1.5 px-3 text-sm text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
                                pathname === `${item.href}/${subItem.name.toLowerCase()}/${dropdownItem.toLowerCase().replace(/\s+/g, '-')}` 
                                  ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50" 
                                  : ""
                              )}
                            >
                              {dropdownItem}
                            </Link>
                          ) : (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className={cn(
                                "block rounded-lg py-1.5 px-3 text-sm text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
                                pathname === dropdownItem.href
                                  ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50" 
                                  : ""
                              )}
                            >
                              {dropdownItem.name}
                            </Link>
                          )
                        ))}
                      </div>
                    </>
                  ) : (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className={cn(
                          "block rounded-lg py-1.5 px-3 text-sm text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
                          pathname === subItem.href
                            ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50" 
                            : ""
                        )}
                      >
                        {subItem.name}
                      </Link>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  )
}