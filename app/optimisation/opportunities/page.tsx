"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/dashboard/header"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Button } from "@/components/ui/button"
import { Check, ExternalLink, X } from "lucide-react"

interface Opportunity {
  id: string;
  title: string;
  subtitle: string;
  impacts: string[];
  description: string;
  showDetails: boolean;
}

export default function OpportunitiesPage() {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([
    {
      id: "1",
      title: "REVENUE",
      subtitle: "Boost your revenue with ad intents",
      impacts: [
        "Create additional revenue without impacting display earnings",
        "Take up minimal space on your page with a compact design",
        "Works without third-party cookies or personalisation"
      ],
      description: "Ad intents scans your pages for opportunities to convert existing text into links and/or places anchors at the bottom of your page. Users will see relevant results based on your content, with ads that help boost your revenue.",
      showDetails: false
    }
  ]);

  const toggleDetails = (id: string) => {
    setOpportunities(prev =>
      prev.map(opp =>
        opp.id === id ? { ...opp, showDetails: !opp.showDetails } : opp
      )
    );
  };

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
              <h1 className="text-3xl font-bold mb-2">Opportunities</h1>
              <p className="text-muted-foreground">
                Discover and manage opportunities to increase your ad revenue
                <Button variant="link" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 px-1 h-auto">
                  Learn more
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Button>
              </p>
            </div>

            <div className="space-y-4">
              {opportunities.map((opportunity) => (
                <Card key={opportunity.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                            <rect width="24" height="24" rx="12" fill="#1565C0"/>
                            <path d="M8 12h8M12 8v8" stroke="white" strokeWidth="2"/>
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-blue-600 mb-1">{opportunity.title}</div>
                        <h2 className="text-xl font-medium mb-4">{opportunity.subtitle}</h2>
                        
                        <div className="mb-4">
                          <div className="text-sm font-medium text-gray-600 mb-2">IMPACT</div>
                          {opportunity.impacts.map((impact, index) => (
                            <div key={index} className="flex items-center gap-2 mb-2">
                              <Check className="h-5 w-5 text-green-600" />
                              <span className="text-sm">{impact}</span>
                            </div>
                          ))}
                        </div>

                        <div className="mb-4">
                          <div className="text-sm font-medium text-gray-600 mb-2">WHAT IS AD INTENTS?</div>
                          <p className="text-sm text-gray-600">{opportunity.description}</p>
                        </div>

                        <Button
                          variant="ghost"
                          className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 px-0"
                          onClick={() => toggleDetails(opportunity.id)}
                        >
                          {opportunity.showDetails ? "Hide details" : "Show details"}
                        </Button>

                        <div className="flex items-center gap-4 mt-4">
                          <Button variant="ghost" className="text-blue-600">
                            Learn more about ad intents
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                          <Button>Turn on for all sites</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}