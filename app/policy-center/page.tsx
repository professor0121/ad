"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/dashboard/header"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Button } from "@/components/ui/button"
import { ExternalLink, ThumbsUp, Sun } from "lucide-react"

export default function PolicyCenterPage() {
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
              <h1 className="text-3xl font-bold mb-2">Policy Centre</h1>
              <p className="text-muted-foreground">
                Monitor and resolve policy issues
                <Button variant="link" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 px-1 h-auto">
                  Learn more
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Button>
              </p>
            </div>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto py-12">
                  <div className="mb-8">
                    <div className="relative w-64 h-64">
                      <div className="absolute top-0 right-0">
                        <Sun className="h-12 w-12 text-yellow-400" />
                      </div>
                      <div className="absolute bottom-0 right-0">
                        <ThumbsUp className="h-10 w-10 text-blue-500" />
                      </div>
                      <img 
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='180' viewBox='0 0 240 180' fill='none'%3E%3Crect width='240' height='140' rx='8' fill='%23E3E8EF'/%3E%3Crect x='40' y='160' width='160' height='20' rx='4' fill='%23E3E8EF'/%3E%3C/svg%3E"
                        alt="Illustration"
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                  <h2 className="text-2xl font-semibold mb-4">No current issues</h2>
                  <p className="text-muted-foreground mb-8">
                    You don't have any current issues that stop or limit ad serving in your sites. Keep up the good work!
                  </p>
                  <Button variant="link" className="text-blue-600">
                    Learn about Policy centre
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}