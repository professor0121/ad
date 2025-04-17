"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/dashboard/header"
import { Sidebar } from "@/components/dashboard/sidebar"
import { ReportsSidebar } from "@/components/reports/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Settings2, Search, Filter, ChevronDown, ArrowUpDown, Pencil, Maximize2 } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const data = [
  { date: '27 Mar', value: 0.19 },
  { date: '28 Mar', value: 0.28 },
  { date: '29 Mar', value: 0.32 },
  { date: '30 Mar', value: 0.31 },
  { date: '31 Mar', value: 0.16 },
  { date: '1 Apr', value: 0.16 },
  { date: '2 Apr', value: 0.15 }
]

const metrics = [
  "Estimated earnings",
  "Page views",
  "Page RPM",
  "Impressions",
  "Impression RPM",
  "Active View Viewable",
  "Clicks"
]

export default function ReportsPage() {
  const [selectedMetric, setSelectedMetric] = useState("Estimated earnings")

  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        <aside className="hidden w-64 shrink-0 border-r md:block">
          <Sidebar />
        </aside>
        <div className="flex flex-1">
          <aside className="w-64 shrink-0 border-r">
            <ReportsSidebar />
          </aside>
          <main className="flex-1 flex flex-col">
          <div className="border-b">
            <div className="flex items-center justify-between px-4 py-2">
              <Tabs defaultValue="last7days" className="w-full">
                <TabsList className="gap-2">
                  <TabsTrigger value="today">Today</TabsTrigger>
                  <TabsTrigger value="last7days">Last 7 days</TabsTrigger>
                  <TabsTrigger value="last30days">Last 30 days</TabsTrigger>
                  <TabsTrigger value="thismonth">This month</TabsTrigger>
                  <TabsTrigger value="lastmonth">Last month</TabsTrigger>
                  <TabsTrigger value="custom" className="gap-2">
                    Custom
                    <ChevronDown className="h-4 w-4" />
                  </TabsTrigger>
                </TabsList>
                <Button variant="ghost" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                  + add comparison
                </Button>
              </Tabs>
              <Button variant="ghost" size="icon">
                <Settings2 className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="p-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <h2 className="text-lg font-medium">Entire account by day</h2>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">Breakdowns:</span>
                      <Button variant="outline" size="sm" className="h-8 gap-1">
                        Date
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="h-8">
                        + Add
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Search or filter your data" className="w-64 pl-9" />
                    </div>
                    <Button variant="ghost" size="icon">
                      <Filter className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Maximize2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-2">
                    {metrics.map((metric) => (
                      <Button
                        key={metric}
                        variant={selectedMetric === metric ? "default" : "ghost"}
                        className="h-8"
                        onClick={() => setSelectedMetric(metric)}
                      >
                        {metric}
                      </Button>
                    ))}
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Pencil className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Line 
                          type="monotone" 
                          dataKey="value" 
                          stroke="#2563eb" 
                          strokeWidth={2}
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>

                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[200px]">
                          <Button variant="ghost" className="gap-2 font-medium">
                            DATE
                            <ArrowUpDown className="h-4 w-4" />
                          </Button>
                        </TableHead>
                        <TableHead>Estimated earnings</TableHead>
                        <TableHead>Page views</TableHead>
                        <TableHead>Page RPM</TableHead>
                        <TableHead>Impressions</TableHead>
                        <TableHead>Impression RPM</TableHead>
                        <TableHead>Active View Viewable</TableHead>
                        <TableHead>Clicks</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">All</TableCell>
                        <TableCell>US$1.44</TableCell>
                        <TableCell>2,765</TableCell>
                        <TableCell>US$0.52</TableCell>
                        <TableCell>5,840</TableCell>
                        <TableCell>US$0.25</TableCell>
                        <TableCell>52.00%</TableCell>
                        <TableCell>43</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Average</TableCell>
                        <TableCell>US$0.21</TableCell>
                        <TableCell>395</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>834</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>6</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Thu, 27 Mar 2025</TableCell>
                        <TableCell>US$0.19</TableCell>
                        <TableCell>472</TableCell>
                        <TableCell>US$0.41</TableCell>
                        <TableCell>844</TableCell>
                        <TableCell>US$0.23</TableCell>
                        <TableCell>54.82%</TableCell>
                        <TableCell>6</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Fri, 28 Mar 2025</TableCell>
                        <TableCell>US$0.28</TableCell>
                        <TableCell>436</TableCell>
                        <TableCell>US$0.65</TableCell>
                        <TableCell>1,053</TableCell>
                        <TableCell>US$0.27</TableCell>
                        <TableCell>48.69%</TableCell>
                        <TableCell>8</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}