"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/dashboard/header"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Info } from "lucide-react"

interface AdManager {
  id: string
  status: "ACTIVE" | "INACTIVE"
}

export default function ThirdPartiesPage() {
  const [adManager, setAdManager] = useState<AdManager>({
    id: "23026459717",
    status: "ACTIVE"
  })

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
              <div className="max-w-4xl">
                <div className="flex items-start justify-between mb-8">
                  <div className="flex-1">
                    <h1 className="text-2xl font-semibold mb-2">Third parties and platforms</h1>
                    <p className="text-muted-foreground">
                      Manage platforms and third parties related to your account.
                      <Button variant="link" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 px-1 h-auto">
                        Learn more
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </Button>
                    </p>
                  </div>
                  <div className="flex-1">
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300' fill='none'%3E%3Crect width='400' height='300' fill='%23F3F4F6'/%3E%3Ccircle cx='200' cy='150' r='100' fill='%2334D399'/%3E%3Ccircle cx='150' cy='120' r='30' fill='%23FCD34D'/%3E%3Ccircle cx='250' cy='120' r='30' fill='%23EC4899'/%3E%3Ccircle cx='200' cy='180' r='30' fill='%236366F1'/%3E%3C/svg%3E"
                      alt="Third parties illustration"
                      className="w-full max-w-sm ml-auto"
                    />
                  </div>
                </div>

                <div className="rounded-lg border">
                  <div className="flex items-center justify-between p-6">
                    <div className="flex items-center gap-2">
                      <h2 className="text-lg font-medium">Ad Manager: {adManager.id}</h2>
                      <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                    </div>
                    <Badge 
                      variant="outline" 
                      className={adManager.status === "ACTIVE" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}
                    >
                      {adManager.status}
                    </Badge>
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