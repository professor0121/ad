"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card" 
import { Header } from "@/components/dashboard/header"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

type SearchType = "all" | "keywords" | "topics" | "placement" | "language" | "location"

interface BlockingControl {
  title: string
  description: string
  actionText: string
}

const blockingControls: Record<string, BlockingControl[]> = {
  all: [
    {
      title: "Advertiser URLs",
      description: "Prevent ads from individual advertisers in search results",
      actionText: "Manage Advertiser URLs"
    },
    {
      title: "Keywords and Phrases",
      description: "Block ads containing specific keywords or phrases from appearing in search results",
      actionText: "Manage Keywords"
    },
    {
      title: "Topic Categories",
      description: "Control which ad topics can appear alongside your search content",
      actionText: "Manage Topics"
    },
    {
      title: "Placement Controls",
      description: "Specify where ads can and cannot appear in search results",
      actionText: "Manage Placements"
    },
    {
      title: "Language Targeting",
      description: "Control which language ads can appear in your search results",
      actionText: "Manage Languages"
    },
    {
      title: "Geographic Targeting",
      description: "Manage ad visibility based on geographic locations",
      actionText: "Manage Locations"
    }
  ]
}

export default function SearchBlockingControlsPage() {
  const [searchType, setSearchType] = useState<SearchType>("all")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        <aside className="hidden w-64 shrink-0 border-r md:block">
          <Sidebar />
        </aside>
        <main className="flex-1 p-8"> 
          <div className="space-y-8">
            <div>
              <h1 className="text-2xl font-semibold text-center mb-2">
                Make sure that you've got the right ads for your brand
              </h1>
              <p className="text-muted-foreground text-center">
                These tools can help you deliver the best ads experience in your search results
              </p>
            </div>

            <div className="flex gap-2 max-w-3xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search controls..." 
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button>Search</Button>
            </div>

            <div className="max-w-6xl mx-auto">
              <h2 className="text-xl font-semibold mb-6">Search Settings for 'All sites'</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {blockingControls[searchType]?.map((control, index) => (
                  <Card key={index} className="border">
                    <CardHeader>
                      <CardTitle className="text-lg font-medium">{control.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4">
                        {control.description}
                      </p>
                      <Button 
                        variant="link" 
                        className="px-0 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        {control.actionText}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}