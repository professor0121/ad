"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/dashboard/header"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Button } from "@/components/ui/button"
import { Plus, Search, BarChart2, Settings2, ChevronDown } from "lucide-react"
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from "next/image";


export default function AdsPage() {
  const adData = [
    {
      label: 'Recommended',
      labelClass: 'bg-[#F1F3F4] text-[#5f6368]',
      iconClass: 'bg-blue-500',
      title: 'Display ads',
      image: 'icons/svg/display-ad.svg',
      description: "A great all-rounder that's designed to work well anywhere.",
    },
    {
      label: 'Native',
      labelClass: 'bg-[#F1F3F4] text-[#5f6368]',
      iconClass: 'bg-green-400',
      title: 'In-feed ads',
      image: 'icons/svg/in_feed-ad.svg',
      description: 'Match the look of your site and fit in-between posts and listings.',
    },
    {
      label: 'Native',
      labelClass: 'bg-[#F1F3F4] text-[#5f6368]',
      iconClass: 'bg-orange-500',
      title: 'In-article ads',
      image: 'icons/svg/in_article-ad.svg',
      description: 'Also match your site and work well with articles and content pages.',
    },
    {
      label: 'Native',
      labelClass: 'bg-[#F1F3F4] text-white',
      iconClass: 'bg-gray-300',
      title: 'Multiplex ads',
      image: 'icons/svg/multiplex-ad.svg',
      description:
        'Grid-based ad unit that shows content recommendation-style native ads.',
    },
  ];
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
                          <Button style={{ background: "white", color: "#1a73e8" }}>Get code</Button>
                        </div>
                        <div>
                          <img src="/images/ads-image.png" alt="Ad Image" className="h-[160px] w-[180px]" />

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

                        <div className="flex items-center gap-2   w-full bg-muted/50 px-4 py-3">
                          <Search className="h-4 w-4 text-muted-foreground" />
                          <Input style={{ border: "none", background: "#FAFAFA" }} placeholder="Search by site name" className="max-w-sm" />
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
                            <div key={site.name} className="grid grid-cols-4 items-center gap-4 px-4 py-[6px] border-b last:border-0">
                              <div className="truncate">{site.name}</div>
                              <div className="text-center">
                                <span className={`inline-flex items-center gap-1  ${site.autoAds === "ON" ? "text-green-600" : ""}`}>
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

                        <div className="flex items-center justify-end mt-4 text-sm text-muted-foreground">

                          <div className="flex items-center">
                            Show rows
                            <Button variant="outline" size="sm" className="h-8">
                              10
                              <ChevronDown className="ml-1 h-4 w-4" />
                            </Button>
                          </div>
                          <div>1 - 4 of 4</div>
                          <div className="flex gap-4"><ChevronLeft /> <ChevronRight /></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>

                </TabsContent>

                <TabsContent value="by-ad-unit" className="mt-16">
                  <h3 className="text-[1.125rem] leading-[1.5rem]">Create new ad unit</h3>
                  <div className="flex flex-wrap gap-2">
                    {adData.map((ad, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-xl shadow-md p-5 w-[20%] box-border"
                      >
                        <span className={`text-sm font-bold px-4 py-2 rounded-full ${ad.labelClass}`}>
                          {ad.label}
                        </span>
                          <img
                            src={`/${ad.image}`}
                            alt="Ad Icon"
                            width={400}
                            height={400}
                          />
                        <h3 className="text-xl font-bold mb-2">{ad.title}</h3>
                        <p className="text-sm text-gray-600 mb-4">{ad.description}</p>
                        <a href="#" className="text-sm text-blue-500 hover:underline">
                          Learn more
                        </a>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg">Existing ad units</h3>
                          {/* <Button variant="ghost" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                            AMP settings
                            <ChevronDown className="ml-1 h-4 w-4" />
                          </Button> */}
                        </div>

                        <div className="flex items-center gap-2   w-full bg-muted/50 px-4 py-3">
                          <Search className="h-4 w-4 text-muted-foreground" />
                          <Input style={{ border: "none", background: "#FAFAFA" }} placeholder="Search by site name" className="max-w-sm" />
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
                            <div key={site.name} className="grid grid-cols-4 items-center gap-4 px-4 py-[6px] border-b last:border-0">
                              <div className="truncate">{site.name}</div>
                              <div className="text-center">
                                <span className={`inline-flex items-center gap-1  ${site.autoAds === "ON" ? "text-green-600" : ""}`}>
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

                        <div className="flex items-center justify-end mt-4 text-sm text-muted-foreground">

                          <div className="flex items-center">
                            Show rows
                            <Button variant="outline" size="sm" className="h-8">
                              10
                              <ChevronDown className="ml-1 h-4 w-4" />
                            </Button>
                          </div>
                          <div>1 - 4 of 4</div>
                          <div className="flex gap-4"><ChevronLeft /> <ChevronRight /></div>
                        </div>
                      </div>
                </TabsContent>

                <TabsContent value="global-settings" className="mt-6">
                  <Card className="flex justify-between w-full md:w-[60%]">
                    <CardContent className="pt-6">
                      <h2 className="text-2xl mb-4">Size and type</h2>
                      <p className="text-muted-foreground">
                      A powerful way to change the size and type of your ads across all of your sites                      </p>
                    </CardContent>
                    <img className="h-[168px] w-[168px]" src="icons/svg/compass_measure_tools-01.svg" alt="" />
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            {/* <Card>
              <CardHeader>
                <CardTitle>Display Ads</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  No ad units created yet. Click "New Ad Unit" to get started.
                </p>
              </CardContent>
            </Card> */}
          </div>
        </main>
      </div>
    </div>
  )
}