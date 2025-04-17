"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/dashboard/header"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Info, Link as LinkIcon } from "lucide-react"

interface AnalyticsAccount {
  id: string
  status: "Connected" | "Not Connected"
  properties: {
    id: string
    name: string
    url: string
  }[]
}

export default function GoogleAnalyticsIntegrationPage() {
  const [analyticsAccount, setAnalyticsAccount] = useState<AnalyticsAccount>({
    id: "UA-123456789-1",
    status: "Connected",
    properties: [
      {
        id: "123456789",
        name: "blogingco.com",
        url: "https://blogingco.com"
      }
    ]
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
                    <h1 className="text-2xl font-semibold mb-2">Google Analytics Integration</h1>
                    <p className="text-muted-foreground">
                      Connect your Google Analytics account to get insights about your ads performance
                      <Button variant="link" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 px-1 h-auto">
                        Learn more
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </Button>
                    </p>
                  </div>
                  <div className="flex-1">
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300' fill='none'%3E%3Crect width='400' height='300' fill='%23F3F4F6'/%3E%3Crect x='100' y='50' width='200' height='200' rx='8' fill='%23EA4335'/%3E%3Cpath d='M150 150 L200 200 L250 100' stroke='white' strokeWidth='20' strokeLinecap='round' strokeLinejoin='round'/%3E%3C/svg%3E"
                      alt="Analytics illustration"
                      className="w-full max-w-sm ml-auto"
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="rounded-lg border p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <h2 className="text-lg font-medium">Analytics Account</h2>
                        <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                      </div>
                      <Badge 
                        variant="outline" 
                        className={analyticsAccount.status === "Connected" 
                          ? "bg-green-50 text-green-700" 
                          : "bg-yellow-50 text-yellow-700"
                        }
                      >
                        {analyticsAccount.status}
                      </Badge>
                    </div>

                    <div className="space-y-4">
                      <div className="grid gap-2">
                        <Label htmlFor="analytics-id">Analytics ID</Label>
                        <div className="flex gap-2">
                          <Input
                            id="analytics-id"
                            value={analyticsAccount.id}
                            onChange={(e) => setAnalyticsAccount(prev => ({
                              ...prev,
                              id: e.target.value
                            }))}
                          />
                          <Button variant="outline">Verify</Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Connected Properties</Label>
                        {analyticsAccount.properties.map((property) => (
                          <div key={property.id} className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="space-y-1">
                              <div className="font-medium">{property.name}</div>
                              <div className="text-sm text-muted-foreground flex items-center gap-1">
                                <LinkIcon className="h-3 w-3" />
                                {property.url}
                              </div>
                            </div>
                            <Button variant="outline" size="sm">Manage</Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-2">
                    <Button variant="outline">Disconnect</Button>
                    <Button>Save Changes</Button>
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