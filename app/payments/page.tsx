"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/dashboard/header"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Button } from "@/components/ui/button"
import { ExternalLink, CreditCard } from "lucide-react"

export default function PaymentsPage() {
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
              <h1 className="text-3xl font-bold mb-2">Payments</h1>
              <p className="text-muted-foreground">
                Manage your payment information and verification status
                <Button variant="link" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 px-1 h-auto">
                  Learn more
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Button>
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-900">
                      <CreditCard className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Payment Information</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        View and update your payment details, including payment method and tax information
                      </p>
                      <Button variant="outline">Manage payment info</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-green-100 p-3 dark:bg-green-900">
                      <svg className="h-6 w-6 text-green-600 dark:text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Verification Status</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Complete verification requirements and check your verification status
                      </p>
                      <Button variant="outline">Check verification</Button>
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