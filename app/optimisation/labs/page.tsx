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
            <div className="flex flex-wrap justify-between md:w-[80%] w-full">
              <div className="flex flex-wrap flex-col w-full md:max-w-[60%]">
                <h1 className="text-2xl font-semibold mb-2">
                  Try out AdSense Labs
                </h1>
                <p className="text-muted-foreground mb-4">
                  Play around with exciting new features before they become widely available. Labs can be
                  anything from cutting-edge formats to experimental features. Simply switch them on or off,
                  whenever you like. We'd love to hear what you think.
                </p>
                <div className="flex">
                  <Button variant="link" className="text-blue-600">
                    Learn more about how to try out an AdSense Lab
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <img className="w-[235px] h-[235px]" src="/images/lab-image.png" alt="" />
            </div>
            <div>
              <div className="space-y-6">
                <div className="flex flex-col gap-8">
                  <h3>Enabled Labs</h3>
                  <p className="text-[12px]">Nothing yet! Check below for your available labs.</p>
                </div>
                <div className="flex flex-col gap-8">
                  <h3>Available Labs</h3>
                  <p className="text-[12px]">New labs are added frequently so if you don't see any at the moment, check back again soon.</p>
                </div>
                <div className="border-b"></div>
              </div>
              <div className="flex flex-col gap-4">
              <Card className="flex gap-8 p-12">
                <img className="w-[100px] h-[150px]" src="/icons/svg/adfiliates.svg" alt="" />
                <div className="flex flex-wrap flex-col py-4 gap-4">
                  <h2>Turn on ad intent links to keep them active</h2>
                  <p className="text-[13px]">AdSense shopping links are graduating to ad intents for all AdSense users, so this lab will no longer be active.</p>
                  <p className="text-[13px]"> To continue benefiting from ad intent links, you’ll need to manually turn the feature on in Auto ads for one or all of your sites.</p>
                    <a href="" className="text-[13px]">Turn on to ad intent to auto ads</a>
                </div>
              </Card>
              <Card className="flex gap-8 p-12">
                <img className="w-[100px] h-[150px]" src="/icons/svg/adfiliates.svg" alt="" />
                <div className="flex flex-wrap flex-col py-4 gap-4">
                  <h2>Turn on ad intent links to keep them active</h2>
                  <p className="text-[13px]">AdSense shopping links are graduating to ad intents for all AdSense users, so this lab will no longer be active.</p>
                  <p className="text-[13px]"> To continue benefiting from ad intent links, you’ll need to manually turn the feature on in Auto ads for one or all of your sites.</p>
                    <a href="" className="text-[13px]">Turn on to ad intent to auto ads</a>
                </div>
              </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}