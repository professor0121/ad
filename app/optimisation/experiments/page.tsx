"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/dashboard/header"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Filter, ChevronDown, ExternalLink } from "lucide-react"

interface Experiment {
  name: string;
  inventory: string;
  startDate: string;
  status: string;
  type: string;
}

export default function ExperimentsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilters, setActiveFilters] = useState([
    "Blocking controls",
    "Auto ads",
    "Created by Google",
    "Created by you"
  ])
  const [experiments, setExperiments] = useState<Experiment[]>([
    {
      name: "Blocking controls experiment (2)",
      inventory: "All sites",
      startDate: "19 Feb 2025",
      status: "Google kept the original",
      type: "Blocking controls"
    },
    {
      name: "Vignette ad frequency",
      inventory: "youtube-playlist-length-calculator.onrender.com",
      startDate: "31 Jan 2025",
      status: "Google kept the original",
      type: "Auto ads"
    },
    {
      name: "Fine-tune banner ads",
      inventory: "youtube-playlist-length-calculator.onrender.com",
      startDate: "14 Dec 2024",
      status: "Google applied the variation",
      type: "Auto ads"
    },
    {
      name: "Fine-tune banner ads",
      inventory: "blogingco.com",
      startDate: "14 Nov 2024",
      status: "Stopped",
      type: "Auto ads"
    },
    {
      name: "ex",
      inventory: "All sites",
      startDate: "26 Oct 2024",
      status: "You kept the original",
      type: "Blocking controls"
    },
    {
      name: "Vignette ad frequency",
      inventory: "blogingco.com",
      startDate: "6 Jun 2024",
      status: "Stopped",
      type: "Auto ads"
    }
  ])

  const filteredExperiments = experiments.filter(exp => 
    exp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    exp.inventory.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        <aside className="hidden w-64 shrink-0 border-r md:block">
          <Sidebar />
        </aside>
        <main className="flex-1 p-8">
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-semibold text-center mb-2">
                Learn more. Earn more
              </h1>
              <p className="text-muted-foreground text-center mb-4">
                Get powerful insights by experimenting with your ads. You can run experiments
                yourself or use Auto optimise to let Google run experiments for you.
              </p>
              <div className="flex items-center justify-center gap-2">
                <Button variant="link" className="text-blue-600">
                  Learn more
                  <ExternalLink className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                New experiment
              </Button>
              <Button variant="outline" className="gap-2">
                Auto optimise on
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-4">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search by name or inventory" 
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button variant="ghost" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex gap-2">
                {activeFilters.map((filter) => (
                  <Badge 
                    key={filter} 
                    variant="outline" 
                    className="rounded-full cursor-pointer hover:bg-accent"
                    onClick={() => setActiveFilters(prev => 
                      prev.filter(f => f !== filter)
                    )}
                  >
                    {filter}
                  </Badge>
                ))}
              </div>

              <Card>
                <CardContent className="p-0">
                  <div className="grid grid-cols-4 gap-4 p-4 border-b bg-muted/50">
                    <div>Experiment name</div>
                    <div>Inventory</div>
                    <div>Start date</div>
                    <div>Status</div>
                  </div>
                  
                  {filteredExperiments.map((experiment, index) => (
                    <div 
                      key={index} 
                      className="grid grid-cols-4 gap-4 p-4 border-b last:border-0 hover:bg-muted/50 cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        {experiment.name}
                        {experiment.type === "Auto ads" && (
                          <Badge variant="outline" className="bg-blue-50 text-blue-700">Auto</Badge>
                        )}
                      </div>
                      <div className="truncate">{experiment.inventory}</div>
                      <div>{experiment.startDate}</div>
                      <div>{experiment.status}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  Show rows
                  <Button variant="outline" size="sm" className="h-8">
                    10
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </div>
                <div>1 - 6 of 6</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}