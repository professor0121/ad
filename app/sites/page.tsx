"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/dashboard/header"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Button } from "@/components/ui/button"
import { Search, BarChart2, Settings2, ChevronDown, Plus, HelpCircle, Delete } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function SitesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        <aside className="hidden w-64 shrink-0   md:block">
          <Sidebar />
        </aside>
        <main className="flex-1 p-8">

          <div className="grid gap-4">
            <Card style={{ border: 'none' }}>
              <CardHeader>
                <div className="flex justify-between">

                  <div>
                    <CardTitle className="text-[1.325rem] leading-[1.7rem] font-[400] mb-2">Manage your sites</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Add sites that you want to monetise with AdSense.
                      <Button variant="link" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 px-1 h-auto">
                        Learn more
                        <HelpCircle className="ml-1 h-3 w-3" />
                      </Button>
                    </p>
                  </div>
                  <img src="/icons/svg/site_management.svg" alt="" />
                </div>
                <div className="flex items-center   mb-6">
                  <Button style={{background:"#1B66C9"}}>
                    <Plus className="mr-2 h-4 w-4" />
                    New site
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="w-full">
                <div className="flex w-full items-center px-[10px] py-[4px]   border">
                  <Search className="h-4 w-4text-muted-foreground" />
                  <Input placeholder="" className="w-full " style={{border:'none' }} />
                </div>

                <div className="flex gap-2 py-4 px-8 border">
                  <Badge className="text-[15px] font-[400] px-4 py-1 bg-transparent text-[#191919]  ">Filter :</Badge>
                  <Badge variant="outline" className="rounded-[8px] text-[15px] font-[400] px-4 py-1">Ready</Badge>
                  <Badge variant="outline" className="rounded-[8px] text-[15px] font-[400] px-4 py-1">Getting ready</Badge>
                  <Badge variant="outline" className="rounded-[8px] text-[15px] font-[400] px-4 py-1">Requires review</Badge>
                  <Badge variant="outline" className="rounded-[8px] text-[15px] font-[400] px-4 py-1">Needs attention</Badge>
                </div>

                <div className="  border">
                  <div className="grid grid-cols-6 gap-4 p-4 border-b bg-muted/50">
                    <div className="flex items-center gap-1">
                      Site URL
                      <ChevronDown className="h-4 w-4" />
                    </div>
                    <div>Approval status</div>
                    <div>Status details</div>
                    <div>Ads.txt status</div>
                    <div>Last updated</div>
                    <div> </div>
                    <div />
                  </div>

                  {[
                    { url: "blogingco.com", status: "Ready", details: "-", txtStatus: "Authorized", lastUpdated: "7 Oct 2022" },
                    { url: "lebely.com", status: "Ready", details: "-", txtStatus: "Authorized", lastUpdated: "17 Mar 2025" },
                    { url: "youtube-playlist-length-calculator.onrender.com", status: "Ready", details: "-", txtStatus: "Authorized", lastUpdated: "13 Nov 2024" },
                    { url: "youtubeplaylistlength.com", status: "Ready", details: "-", txtStatus: "Authorized", lastUpdated: "30 Sept 2024" }
                  ].map((site) => (
                    <div key={site.url} className="grid grid-cols-6 gap-4 p-4 border-b last:border-0">
                      <div className="truncate text-blue-600">{site.url}</div>
                      <div><Badge variant="outline" className="bg-green-50">{site.status}</Badge></div>
                      <div>{site.details}</div>
                      <div>{site.txtStatus}</div>
                      <div>{site.lastUpdated}</div>
                      <div className="">
                          <Button><Delete/></Button>
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