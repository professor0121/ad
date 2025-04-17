"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/dashboard/header"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Button } from "@/components/ui/button"
import { Lightbulb, Beaker, FlaskRound as Flask, ExternalLink } from "lucide-react"

export default function OptimisationPage() {
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
              <h1 className="text-3xl font-bold mb-2">Optimisation</h1>
              <p className="text-muted-foreground">
                Explore opportunities to improve your ad performance and revenue
                <Button variant="link" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 px-1 h-auto">
                  Learn more
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Button>
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Lightbulb className="h-6 w-6 text-yellow-500" />
                    <CardTitle>Opportunities</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Discover personalized recommendations to optimize your ad performance
                  </p>
                  <Button variant="outline">View opportunities</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Beaker className="h-6 w-6 text-purple-500" />
                    <CardTitle>Experiments</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Test different ad strategies and measure their impact on revenue
                  </p>
                  <Button variant="outline">Start experimenting</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Flask className="h-6 w-6 text-blue-500" />
                    <CardTitle>Labs</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Try out experimental features and provide feedback
                  </p>
                  <Button variant="outline">Explore labs</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}