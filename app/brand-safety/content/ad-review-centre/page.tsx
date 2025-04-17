"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/dashboard/header"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { AlertTriangle, ExternalLink, Settings2, Search, Filter, MoreVertical, Ban, ChevronDown, RefreshCw } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function AdReviewCentrePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        <aside className="hidden w-64 shrink-0 border-r md:block">
          <Sidebar />
        </aside>
        <main className="flex-1 p-8">
          <div className="space-y-6">
            {/* <div>
              <h1 className="text-3xl font-bold mb-2">Ad Review Centre</h1>
              <p className="text-muted-foreground">
                Review and manage ads that appear on your sites
                <Button variant="link" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 px-1 h-auto">
                  Learn more
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Button>
              </p>
            </div> */}

            <div className="flex flex-col">
              <div className="flex flex-wrap justify-between w-full gap-4">
                <div className="relative w-[85%]">
                  <Search className="absolute left-2.5 top-2.5 h-4" />
                  <Input placeholder="Search ads" className="pl-8   " />
                </div>
                <div>
                  <Button variant="outline" className="gap-2">
                    <Filter className="h-4 w-4" />
                    Search by Image
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-2">
                <Checkbox id="select-all" />
                <label htmlFor="select-all">Select all</label>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <RefreshCw className="h-4 w-4" />
                </Button>
                <label htmlFor="">Refresh</label>
              </div>
              <div className="flex items-center gap-2">
                Sort by
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  Most impressions
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { url: "in.best-jobs-online.com", impressions: "3,333" },
                { url: "in.thedollarbusiness.com", impressions: "303" },
                { url: "porter.in/enterprise", impressions: "298" },
                { url: "primevideo.com", impressions: "269" },
                { url: "seller.flipkart.com", impressions: "247" },
                { url: "in.thedollarbusiness.com/search", impressions: "228" },
                { url: "www.foundit.in/seeker", impressions: "216" },
                { url: "fancode.com", impressions: "215" }
              ].map((ad, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-3">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-start justify-between">
                        <Checkbox id={`ad-${index}`} className="mt-1" />
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-md aspect-video flex items-center justify-center">
                        <Search className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <div>
                        <a href={`https://${ad.url}`} target="_blank" rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:underline truncate block">
                          {ad.url}
                        </a>
                        <p className="text-sm text-muted-foreground">{ad.impressions} impressions</p>
                      </div>
                      <div className="flex justify-end">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Ban className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex items-center justify-between text-sm text-muted-foreground mt-4">
              <div className="flex items-center gap-2">
                Show rows
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  Auto
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
              <div>1-8 of many</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}