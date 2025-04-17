"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/dashboard/header"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Info, Trash2 } from "lucide-react"

interface AccountInfo {
  publisherId: string
  customerId: string
  timezone: string
  activeProducts: {
    content: boolean
    search: {
      enabled: boolean
      revenue: number
    }
  }
  sellerVisibility: "confidential" | "transparent"
  businessDomain: string
  status: string
}

export default function AccountInformationPage() {
  const [accountInfo, setAccountInfo] = useState<AccountInfo>({
    publisherId: "pub-3932434471923785",
    customerId: "8667855569",
    timezone: "(UTC+05:30) Kolkata",
    activeProducts: {
      content: true,
      search: {
        enabled: true,
        revenue: 51
      }
    },
    sellerVisibility: "transparent",
    businessDomain: "blogingco.com",
    status: "Open"
  })

  const handleVisibilityChange = (value: "confidential" | "transparent") => {
    setAccountInfo(prev => ({
      ...prev,
      sellerVisibility: value
    }))
  }

  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        <aside className="hidden w-64 shrink-0 border-r md:block">
          <Sidebar />
        </aside>
        <main className="flex-1 p-8">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="grid gap-4">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="publisherId">Publisher ID</Label>
                    <Info className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <Input
                    id="publisherId"
                    value={accountInfo.publisherId}
                    onChange={(e) => setAccountInfo(prev => ({ ...prev, publisherId: e.target.value }))}
                  />
                </div>

                <div className="grid gap-4">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="customerId">Customer ID</Label>
                    <Info className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <Input
                    id="customerId"
                    value={accountInfo.customerId}
                    onChange={(e) => setAccountInfo(prev => ({ ...prev, customerId: e.target.value }))}
                  />
                </div>

                <div className="grid gap-4">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="timezone">Time zone</Label>
                    <Info className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <Select
                    value={accountInfo.timezone}
                    onValueChange={(value) => setAccountInfo(prev => ({ ...prev, timezone: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue>{accountInfo.timezone}</SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="(UTC+05:30) Kolkata">(UTC+05:30) Kolkata</SelectItem>
                      <SelectItem value="(UTC+00:00) London">(UTC+00:00) London</SelectItem>
                      <SelectItem value="(UTC-05:00) New York">(UTC-05:00) New York</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-4">
                  <div className="flex items-center gap-2">
                    <Label>Active products</Label>
                    <Info className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="space-y-2">
                    <div>Content</div>
                    <div className="flex items-center gap-2">
                      <span>Search</span>
                      <span className="text-sm text-muted-foreground">
                        ({accountInfo.activeProducts.search.revenue}% publisher revenue share)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="flex items-center gap-2">
                    <Label>Seller information visibility</Label>
                    <Info className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <RadioGroup
                    value={accountInfo.sellerVisibility}
                    onValueChange={handleVisibilityChange}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="confidential" id="confidential" />
                      <Label htmlFor="confidential">Confidential</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="transparent" id="transparent" />
                      <Label htmlFor="transparent">Transparent</Label>
                    </div>
                  </RadioGroup>
                  {accountInfo.sellerVisibility === "transparent" && (
                    <div className="pl-6">
                      <p className="text-sm text-muted-foreground mb-4">
                        Your business name and verified domain (if provided) appear in the Google sellers.json file.
                        <Button variant="link" className="text-blue-600 px-1 h-auto">
                          Learn more about verified domains
                        </Button>
                      </p>
                      <div className="space-y-2">
                        <Label>Business domain</Label>
                        <div className="flex items-center gap-2">
                          <Input
                            value={accountInfo.businessDomain}
                            onChange={(e) => setAccountInfo(prev => ({ ...prev, businessDomain: e.target.value }))}
                          />
                          <Badge variant="outline" className="bg-green-50 text-green-700">Verified</Badge>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="grid gap-4">
                  <div className="flex items-center gap-2">
                    <Label>Account Status</Label>
                    <Info className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="text-green-600">{accountInfo.status}</div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Info className="h-4 w-4" />
                    You can't currently close this AdSense account.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}