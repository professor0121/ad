"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/dashboard/header"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Button } from "@/components/ui/button"
import { Search, BarChart2, Settings2, ChevronDown, Plus, HelpCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function SitesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        <aside className="hidden w-64 shrink-0 border-r md:block">
          <Sidebar />
        </aside>
        <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Sites</h1>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New site
            </Button>
          </div>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">Manage your sites</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Add sites that you want to monetise with AdSense.
                      <Button variant="link" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 px-1 h-auto">
                        Learn more
                        <HelpCircle className="ml-1 h-3 w-3" />
                      </Button>
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search" className="max-w-sm" />
                </div>
                
                <div className="flex gap-2 mb-4">
                  <Badge variant="outline" className="rounded-full">Ready</Badge>
                  <Badge variant="outline" className="rounded-full">Getting ready</Badge>
                  <Badge variant="outline" className="rounded-full">Requires review</Badge>
                  <Badge variant="outline" className="rounded-full">Needs attention</Badge>
                </div>

                <div className="rounded-lg border">
                  <div className="grid grid-cols-4 gap-4 p-4 border-b bg-muted/50">
                    <div className="flex items-center gap-1">
                      Site URL
                      <ChevronDown className="h-4 w-4" />
                    </div>
                    <div>Approval status</div>
                    <div>Status details</div>
                    <div>Last updated</div>
                    <div />
                  </div>
                  
                  {[
                    { url: "blogingco.com", status: "Ready", details: "-", lastUpdated: "7 Oct 2022" },
                    { url: "lebely.com", status: "Ready", details: "-", lastUpdated: "17 Mar 2025" },
                    { url: "youtube-playlist-length-calculator.onrender.com", status: "Ready", details: "-", lastUpdated: "13 Nov 2024" },
                    { url: "youtubeplaylistlength.com", status: "Ready", details: "-", lastUpdated: "30 Sept 2024" }
                  ].map((site) => (
                    <div key={site.url} className="grid grid-cols-4 gap-4 p-4 border-b last:border-0">
                      <div className="truncate text-blue-600">{site.url}</div>
                      <div><Badge variant="outline" className="bg-green-50">{site.status}</Badge></div>
                      <div>{site.details}</div>
                      <div>{site.lastUpdated}</div>
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon">
                          <BarChart2 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Settings2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    Show rows
                    <Button variant="outline" size="sm" className="h-8 px-2">
                      10
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                  <div>1 - 4 of 4</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}