"use client"

import { useState } from "react"
import { Search, Plus, MoreVertical } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface ReportItem {
  title: string
  description: string
  icon?: string
}

const reportItems: ReportItem[] = [
  {
    title: "Entire account by day",
    description: "Estimated earnings by Date",
  },
  {
    title: "Top pages",
    description: "Earnings for your popular pages",
  },
  {
    title: "Sites",
    description: "Performance of each site",
  },
  {
    title: "Content platform",
    description: "Estimated earnings by Platform",
  },
  {
    title: "Countries",
    description: "How ads perform by country",
  },
  {
    title: "Ad units",
    description: "Estimated earnings by Ad unit",
  },
  {
    title: "Platforms",
    description: "Estimated earnings by Platform",
  },
]

export function ReportsSidebar() {
  const [selectedReport, setSelectedReport] = useState("Entire account by day")

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search reports" className="pl-9" />
        </div>
        <Button size="icon">
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-1">
        {reportItems.map((item) => (
          <button
            key={item.title}
            className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
              selectedReport === item.title
                ? "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400"
                : "hover:bg-muted/50"
            }`}
            onClick={() => setSelectedReport(item.title)}
          >
            <div>
              <div className="flex items-center gap-2 font-medium text-sm">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 4v16m-8-8h16" />
                </svg>
                {item.title}
              </div>
              <div className="text-xs text-muted-foreground">{item.description}</div>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </button>
        ))}
      </div>
    </div>
  )
}