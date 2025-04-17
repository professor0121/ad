"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/dashboard/header"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function CrawlerAccessPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        <aside className="hidden w-64 shrink-0 border-r md:block">
          <Sidebar />
        </aside>
        <main className="flex-1 p-8">
          <Card>
            <CardContent className="pt-6">
              <div className="max-w-3xl">
                <h1 className="text-2xl font-semibold mb-4">Add login details for your site</h1>
                
                <div className="flex gap-8 items-start">
                  <div className="flex-1">
                    <p className="text-muted-foreground mb-4">
                      To show ads on pages behind a login, provide your site's login details. Then verify that the site is yours in Search Console and other Webmaster tools.
                      <Button variant="link" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 px-1 h-auto">
                        Learn more about login details
                      </Button>
                    </p>

                    <Button className="mb-8">Add login details</Button>
                  </div>

                  <div className="flex-1">
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300' fill='none'%3E%3Crect width='400' height='300' fill='%23F3F4F6'/%3E%3Crect x='50' y='50' width='300' height='200' rx='8' fill='white' stroke='%23E5E7EB'/%3E%3Crect x='70' y='70' width='260' height='160' rx='4' fill='%23F3F4F6'/%3E%3Cpath d='M200 150 L220 170 L180 170 Z' fill='%236B7280'/%3E%3C/svg%3E"
                      alt="Login details illustration"
                      className="w-full rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}