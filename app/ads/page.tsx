"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/dashboard/header"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Button } from "@/components/ui/button"
import { Plus, Search, BarChart2, Settings2, ChevronDown } from "lucide-react"

export default function AdsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        <aside className="hidden w-64 shrink-0 border-r md:block">
          <Sidebar />
        </aside>
        <main className="flex-1 p-8">
          {/* <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Ad Units</h1>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Ad Unit
            </Button>
          </div> */}
          <div className="grid gap-4">
            <div className="flex flex-col gap-4">
              <Tabs defaultValue="by-site" className="w-full">

                <TabsList className=" w-[60%] rounded-none  justify-between h-auto px-20 bg-transparent">
                  <TabsTrigger
                    value="by-site"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 dark:data-[state=active]:border-blue-400 dark:data-[state=active]:text-blue-400 pb-2"
                  >
                    By site
                  </TabsTrigger>
                  <TabsTrigger
                    value="by-ad-unit"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 dark:data-[state=active]:border-blue-400 dark:data-[state=active]:text-blue-400 pb-2"
                  >
                    By ad unit
                  </TabsTrigger>
                  <TabsTrigger
                    value="global-settings"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 dark:data-[state=active]:border-blue-400 dark:data-[state=active]:text-blue-400 pb-2"
                  >
                    Global settings
                  </TabsTrigger>
                </TabsList>
                <div className="border-b "></div>
                <TabsContent value="by-site" className="mt-6">

                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex justify-between flex-wrap">
                        <div>
                        <h2 className="text-2xl mb-2">Let Google place ads for you</h2>
                        <p className="text-muted-foreground mb-4">
                          Add one piece of code to your site and Google will automatically show ads in all the best places.
                          <Button variant="link" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 px-1">
                            Learn more
                            <Settings2 className="ml-1 h-3 w-3" />
                          </Button>
                        </p>
                        <Button style={{background:"white",color:"#1a73e8"}}>Get code</Button>
                      </div>
                      <div>
                      <img src="/images/ads-image.png"  alt="Ad Image"  className="h-[160px] w-[180px]"/>

                      </div>
                      </div>

                      <div className="pt-4">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg">All your sites</h3>
                          <Button variant="ghost" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                            AMP settings
                            <ChevronDown className="ml-1 h-4 w-4" />
                          </Button>
                        </div>

                        <div className="flex items-center gap-2 mb-4 w-full bg-muted/50 px-4 py-3">
                          <Search className="h-4 w-4 text-muted-foreground" />
                          <Input placeholder="Search by site name" className="max-w-sm" />
                        </div>

                        <div className="">
                          <div className="grid grid-cols-4 gap-4 p-4 border-b ">
                            <div className="flex items-center gap-1">
                              Name
                              <ChevronDown className="h-4 w-4" />
                            </div>
                            <div className="text-center">Auto ads</div>
                            <div className="text-center">Page exclusions</div>
                            <div />
                          </div>

                          {[
                            { name: "blogingco.com", autoAds: "ON", exclusions: "0" },
                            { name: "lebely.com", autoAds: "OFF", exclusions: "0" },
                            { name: "youtube-playlist-length-calculator.onrender.com", autoAds: "ON", exclusions: "0" },
                            { name: "youtubeplaylistlength.com", autoAds: "ON", exclusions: "0" }
                          ].map((site) => (
                            <div key={site.name} className="grid grid-cols-4 gap-4 p-4 border-b last:border-0">
                              <div className="truncate">{site.name}</div>
                              <div className="text-center">
                                <span className={`inline-flex items-center gap-1 ${site.autoAds === "ON" ? "text-green-600" : ""}`}>
                                  • {site.autoAds}
                                </span>
                              </div>
                              <div className="text-center">{site.exclusions}</div>
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
                            <Button variant="outline" size="sm" className="h-8">
                              10
                              <ChevronDown className="ml-1 h-4 w-4" />
                            </Button>
                          </div>
                          <div>1 - 4 of 4</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>

                </TabsContent>

                <TabsContent value="by-ad-unit" className="mt-6">
                  <Card>
                    <CardContent className="pt-6">
                      <h2 className="text-2xl mb-4">Ad Unit Settings</h2>
                      <p className="text-muted-foreground">
                        Configure and manage your individual ad units here.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="global-settings" className="mt-6">
                  <Card>
                    <CardContent className="pt-6">
                      <h2 className="text-2xl mb-4">Global Ad Settings</h2>
                      <p className="text-muted-foreground">
                        Manage settings that apply to all your ad units.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Display Ads</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  No ad units created yet. Click "New Ad Unit" to get started.
                </p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}