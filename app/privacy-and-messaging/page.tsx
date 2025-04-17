"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/dashboard/header"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Button } from "@/components/ui/button"
import { Settings2, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function PrivacyAndMessagingPage() {
  const [activeEuropeanRegulations, setActiveEuropeanRegulations] = useState(1)

  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        <aside className="hidden w-64 shrink-0 border-r md:block">
          <Sidebar />
        </aside>
        <main className="flex-1 p-8">
          <div className="space-y-6">
            <div className="flex justify-between">
              <div>
                <h1 className="text-3xl font-400 mb-2">Privacy and messaging</h1>
                <p className="text-muted-foreground">
                  Manage your privacy settings and explore new ways to monetise your site<br></br>
                  <Button variant="link" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 px-1 h-auto">
                    Learn more
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Button>
                </p>
              </div>
              <img className=" w-[234px] h-[260px]" src="/images/homepage_education-1.png" alt="" />
            </div>


            <div>
            <p className="text-[18px]">Consent management solutions</p >
                <p className="text-muted-foreground mt-1.5">
                  Gather user consent and provide opt-out decisions for privacy regulations and manage your ad serving settings
                </p>
            </div>
            <Card>
            
              <CardContent className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="12" fill="#1565C0" />
                          <path d="M6 12L10 16L18 8" stroke="white" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">European regulations</h3>
                      <p className="text-sm text-muted-foreground">
                        Collect consent for GDPR and other European regulations to ensure that you can serve ads to site visitors in the EEA, UK and Switzerland
                      </p>
                      <div className="flex items-center gap-3 mt-3">
                        <Button variant="default" className="text-blue-600 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900 dark:hover:bg-blue-800">
                          Manage
                        </Button>
                        <Badge variant="secondary" className="bg-green-50 text-green-700 dark:bg-green-900 dark:text-green-300">
                          {activeEuropeanRegulations} active
                        </Badge>
                        <Button variant="ghost" size="icon">
                          <Settings2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center">
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="12" fill="#B71C1C" />
                          <path d="M7 12H17M12 7V17" stroke="white" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">US state regulations</h3>
                      <p className="text-sm text-muted-foreground">
                        Manage settings and create privacy messages for users in US states
                      </p>
                      <div className="flex items-center gap-3 mt-3">
                        <Button variant="default" className="text-blue-600 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900 dark:hover:bg-blue-800">
                          Create
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Settings2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Ad blocking recovery</CardTitle>
                  <p className="text-muted-foreground mt-1.5">
                    Recover revenue from ad-blocking users with compliant solutions
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center">
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="12" fill="#EF6C00" />
                          <path d="M6 18L18 6M6 6L18 18" stroke="white" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Implement solutions to engage with users who have ad blockers enabled
                      </p>
                      <div className="flex items-center gap-3 mt-3">
                        <Button variant="default" className="text-blue-600 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900 dark:hover:bg-blue-800">
                          Get started
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Settings2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
             
                <CardContent>
                  <div className="flex items-center flex-col gap-4">
                    <div className="flex flex-col">
                       <img src="/icons/svg/firewall.svg" alt="" />
                    </div>
                    <div>
                      <h3>Offerwall</h3>
                      <p className="text-sm text-muted-foreground">
                        Create engaging reward opportunities for users to earn while interacting with your content
                      </p>
                      <div className="flex items-center gap-3 mt-3">
                        <Button variant="default" className="text-blue-600 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900 dark:hover:bg-blue-800">
                          Set up now
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Settings2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}