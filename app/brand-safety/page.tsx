"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/dashboard/header"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Button } from "@/components/ui/button"
import { Settings2, ExternalLink, Shield, ShieldCheck, ShieldAlert, AlertTriangle, Ban } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BrandSafetyPage() {
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
              <h1 className="text-3xl font-bold mb-2">Brand Safety</h1>
              <p className="text-muted-foreground">
                <Shield className="inline-block w-4 h-4 mr-2" />
                Manage your brand safety settings and controls
                <Button variant="link" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 px-1 h-auto">
                  Learn more
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Button>
              </p>
            </div>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-6 w-6 text-green-600 dark:text-green-500" />
                  <CardTitle>Safety Controls</CardTitle>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Configure your brand safety settings to protect your brand's reputation and ensure ad quality
                </p>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="content" className="w-full">
                  <TabsList className="border-b rounded-none w-full justify-start h-auto p-0 bg-transparent">
                    <TabsTrigger 
                      value="content"
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 dark:data-[state=active]:border-blue-400 dark:data-[state=active]:text-blue-400 pb-2"
                    >
                      Content
                    </TabsTrigger>
                    <TabsTrigger 
                      value="search"
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 dark:data-[state=active]:border-blue-400 dark:data-[state=active]:text-blue-400 pb-2"
                    >
                      Search
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="content" className="mt-6 space-y-4">
                    <div className="space-y-4">
                      <div className="rounded-lg border p-6 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950 dark:to-background">
                        <div className="flex items-start gap-4">
                          <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-900">
                            <AlertTriangle className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold mb-2">Ad Review Centre</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                              Review and manage ads that appear on your content. Monitor ad quality and ensure brand safety compliance.
                            </p>
                            <Button variant="default" className="text-blue-600 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900 dark:hover:bg-blue-800">
                              Review Ads
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border p-6 bg-gradient-to-br from-red-50 to-white dark:from-red-950 dark:to-background">
                        <div className="flex items-start gap-4">
                          <div className="rounded-full bg-red-100 p-3 dark:bg-red-900">
                            <Ban className="h-6 w-6 text-red-600 dark:text-red-400" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold mb-2">Blocking Controls</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                              Set up content filters and blocking rules to control which types of ads appear on your content.
                            </p>
                            <Button variant="default" className="text-blue-600 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900 dark:hover:bg-blue-800">
                              Manage Controls
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="search" className="mt-6">
                    <div className="rounded-lg border p-6 bg-gradient-to-br from-purple-50 to-white dark:from-purple-950 dark:to-background">
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900">
                          <ShieldAlert className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-2">Search Blocking Controls</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            Configure advanced search-specific blocking controls and filters to maintain brand safety across search results.
                          </p>
                          <Button variant="default" className="text-blue-600 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900 dark:hover:bg-blue-800">
                            Configure Settings
                          </Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}