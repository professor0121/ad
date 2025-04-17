"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/dashboard/header"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Beaker, FlaskRound as Flask } from "lucide-react"

interface LabFeature {
  id: string;
  title: string;
  description: string;
  status: "enabled" | "available" | "retired";
  beta?: boolean;
}

export default function LabsPage() {
  const [labFeatures, setLabFeatures] = useState<LabFeature[]>([
    {
      id: "advanced-analytics",
      title: "Advanced Analytics",
      description: "Get deeper insights into your ad performance with machine learning",
      status: "available",
      beta: true
    },
    {
      id: "ad-intent-links",
      title: "Ad Intent Links",
      description: "AdSense shopping links are graduating to ad intents for all AdSense users",
      status: "retired"
    }
  ])

  const toggleFeatureStatus = (id: string) => {
    setLabFeatures(prev => prev.map(feature => 
      feature.id === id 
        ? { 
            ...feature, 
            status: feature.status === "enabled" ? "available" : "enabled" 
          }
        : feature
    ))
  }

  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        <aside className="hidden w-64 shrink-0 border-r md:block">
          <Sidebar />
        </aside>
        <main className="flex-1 p-8">
          <div className="space-y-8">
            <div>
              <h1 className="text-2xl font-semibold text-center mb-2">
                Try out AdSense Labs
              </h1>
              <p className="text-muted-foreground text-center mb-4">
                Play around with exciting new features before they become widely available. Labs can be
                anything from cutting-edge formats to experimental features. Simply switch them on or off,
                whenever you like. We'd love to hear what you think.
              </p>
              <div className="flex justify-center">
                <Button variant="link" className="text-blue-600">
                  Learn more about how to try out an AdSense Lab
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Beaker className="h-6 w-6 text-blue-500" />
                    <CardTitle>Enabled Labs</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  {labFeatures.filter(feature => feature.status === "enabled").length === 0 ? (
                    <p className="text-muted-foreground">
                      Nothing yet! Check below for your available labs.
                    </p>
                  ) : (
                    <div className="space-y-4">
                      {labFeatures
                        .filter(feature => feature.status === "enabled")
                        .map(feature => (
                          <div key={feature.id} className="flex items-center justify-between p-4 border rounded-lg">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-medium">{feature.title}</h3>
                                {feature.beta && (
                                  <Badge variant="outline" className="bg-blue-50 text-blue-700">Beta</Badge>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {feature.description}
                              </p>
                            </div>
                            <Button 
                              variant="outline"
                              onClick={() => toggleFeatureStatus(feature.id)}
                            >
                              Turn off
                            </Button>
                          </div>
                        ))
                      }
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Flask className="h-6 w-6 text-blue-500" />
                    <CardTitle>Available Labs</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {labFeatures
                      .filter(feature => feature.status === "available")
                      .map(feature => (
                        <div key={feature.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-medium">{feature.title}</h3>
                              {feature.beta && (
                                <Badge variant="outline" className="bg-blue-50 text-blue-700">Beta</Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {feature.description}
                            </p>
                          </div>
                          <Button 
                            variant="outline"
                            onClick={() => toggleFeatureStatus(feature.id)}
                          >
                            Try it out
                          </Button>
                        </div>
                      ))
                    }
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Retired Labs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {labFeatures
                      .filter(feature => feature.status === "retired")
                      .map(feature => (
                        <div key={feature.id} className="p-4 border rounded-lg bg-muted/50">
                          <div className="flex items-center gap-2 mb-4">
                            <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                              <svg viewBox="0 0 24 24" className="w-6 h-6 text-muted-foreground">
                                <rect width="16" height="20" x="4" y="2" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                                <path d="M8 7h8M8 12h8M8 17h8" stroke="currentColor" strokeWidth="2"/>
                              </svg>
                            </div>
                            <div>
                              <h3 className="font-medium">{feature.title}</h3>
                              <p className="text-sm text-muted-foreground">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                          <Button variant="outline" className="w-full">
                            Turn on ad intents in Auto ads
                          </Button>
                        </div>
                      ))
                    }
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