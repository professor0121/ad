"use client"

import React from 'react'
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/dashboard/header"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AlertTriangle } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface PaymentInfo {
  accountNumber: string;
  pubId: string;
  user: string;
  name: string;
  threshold: number;
  earnings: number;
  lastPayment: {
    amount: number;
    date: string;
  };
  transactions: Array<{
    date: string;
    amount: number;
  }>;
}

export default function PaymentInfoPage() {
  const [isEditing, setIsEditing] = useState(false)
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    accountNumber: "****8456",
    pubId: "pub-392424447192785",
    name: "gopal gaur",
    user: "i.user",
    threshold: 100.00,
    earnings: 81.38,
    lastPayment: {
      amount: 114.70,
      date: "21 Jun 2024"
    },
    transactions: [
      { date: "1-4 Apr 2024", amount: 81.38 },
      { date: "1-31 Mar 2024", amount: 81.38 },
      { date: "1-28 Feb 2024", amount: 72.65 }
    ]
  })

  const handlePaymentMethodUpdate = () => {
    setIsEditing(!isEditing)
  }

  const updateField = (field: keyof PaymentInfo, value: any) => {
    setPaymentInfo(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        <aside className="hidden w-64 shrink-0 border-r md:block dark:bg-background">
          <Sidebar />
        </aside>
        <main className="flex-1 p-8">
          <div className="space-y-4">
            <h2 className="text-lg font-medium">PAYMENTS ACCOUNT</h2>
            <p className="text-sm">AdSense (India)</p>
            <h3 className="text-base font-medium">Payments</h3>

            <Card className="bg-red-50 border-red-200 mb-4">
              <CardContent className="p-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                <p className="text-sm text-red-600">
                  To make sure that the right amount of tax is withheld on your payouts, provide your Singapore tax info as soon as possible.
                </p>
                <Button variant="outline" size="sm" className="ml-auto">
                  Add tax info
                </Button>
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-medium mb-4">Your earnings</h4>
                  <p className="text-2xl font-semibold mb-2">US${paymentInfo.earnings}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Paid monthly if the total is at least US$
                    <Input
                      type="number"
                      value={paymentInfo.threshold}
                      onChange={(e) => updateField("threshold", parseFloat(e.target.value))}
                      className="w-20 h-6 px-1 py-0 inline-block mx-1"
                    />
                    (your payout threshold)
                  </p>
                  <div className="bg-blue-50 rounded-full h-2 mb-2">
                    <div className="bg-blue-600 h-full rounded-full" style={{ width: '81%' }} />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    You've reached 81% of your payment threshold
                  </p>
                  <p className="text-xs text-muted-foreground mt-4">
                    Your last payment was issued on {paymentInfo.lastPayment.date} for US${paymentInfo.lastPayment.amount}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-medium mb-4">How you get paid</h4>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <path d="M3 9h18M9 21V9" />
                      </svg>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm">Bank transfer to bank account</span>
                        <Input
                          value={paymentInfo.accountNumber}
                          onChange={(e) => updateField("accountNumber", e.target.value)}
                          className="w-32 h-6 px-1 py-0"
                        />
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <Input
                          value={paymentInfo.name}
                          onChange={(e) => updateField("name", e.target.value)}
                          className="w-40 h-6 px-1 py-0 text-muted-foreground"
                        />
                      </div>
                    </div>
                  </div>
                  <Button variant="link" className="text-blue-600 px-0">
                    Manage payment methods
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-medium mb-4">Transactions</h4>
                  <div className="space-y-2">
                    {paymentInfo.transactions.map((transaction, index) => (
                      <div key={index} className="flex items-center justify-between py-2">
                        <span className="text-sm text-blue-600 hover:underline cursor-pointer">
                          {transaction.date}
                        </span>
                        <span className="text-sm">US${transaction.amount.toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="link" className="text-blue-600 px-0 mt-4">
                    View transactions
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-medium mb-4">Settings</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">AdSense</span>
                      <Input
                        value={paymentInfo.pubId}
                        onChange={(e) => updateField("pubId", e.target.value)}
                        className="w-48 h-6 px-1 py-0"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <Input
                        value={paymentInfo.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        className="w-40 h-6 px-1 py-0"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <Input
                        value={paymentInfo.user}
                        onChange={(e) => updateField("user", e.target.value)}
                        className="w-40 h-6 px-1 py-0 text-blue-600"
                      />
                    </div>
                  </div>
                  <Button variant="link" className="text-blue-600 px-0 mt-4">
                    Manage settings
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}