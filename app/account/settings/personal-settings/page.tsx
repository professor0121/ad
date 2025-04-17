"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/dashboard/header"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface PersonalSettings {
  loginEmail: string
  firstName: string
  surname: string
  contactEmail: string
  useLoginEmail: boolean
  phone: string
  emailPreferences: {
    automaticExperiments: boolean
    policyReport: boolean
    customizedHelp: boolean
    periodicNewsletters: boolean
    occasionalSurveys: boolean
    specialOffers: boolean
    otherProducts: boolean
  }
  displayLanguage: string
}

export default function PersonalSettingsPage() {
  const [settings, setSettings] = useState<PersonalSettings>({
    loginEmail: "abhishekak.madquick@gmail.com",
    firstName: "",
    surname: "",
    contactEmail: "abhishekak.madquick@gmail.com",
    useLoginEmail: true,
    phone: "",
    emailPreferences: {
      automaticExperiments: true,
      policyReport: true,
      customizedHelp: false,
      periodicNewsletters: false,
      occasionalSurveys: false,
      specialOffers: false,
      otherProducts: false
    },
    displayLanguage: "English (United Kingdom)"
  })

  const handleEmailPreferenceChange = (key: keyof typeof settings.emailPreferences) => {
    setSettings(prev => ({
      ...prev,
      emailPreferences: {
        ...prev.emailPreferences,
        [key]: !prev.emailPreferences[key]
      }
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
                  <div className="flex items-center justify-between">
                    <Label>Login Email</Label>
                    <div className="text-sm">
                      <span className="text-muted-foreground">{settings.loginEmail}</span>
                      <Button variant="link" className="text-blue-600 px-1 h-auto">
                        Edit password in Google accounts
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Contact details</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="First name"
                      value={settings.firstName}
                      onChange={(e) => setSettings(prev => ({ ...prev, firstName: e.target.value }))}
                    />
                    <Input
                      placeholder="Surname"
                      value={settings.surname}
                      onChange={(e) => setSettings(prev => ({ ...prev, surname: e.target.value }))}
                    />
                  </div>

                  <div className="space-y-4">
                    <Label>Contact email</Label>
                    <RadioGroup
                      value={settings.useLoginEmail ? "login" : "different"}
                      onValueChange={(value) => setSettings(prev => ({
                        ...prev,
                        useLoginEmail: value === "login"
                      }))}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="login" id="login" />
                        <Label htmlFor="login">Use login email: {settings.loginEmail}</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="different" id="different" />
                        <Label htmlFor="different">Use a different email...</Label>
                      </div>
                    </RadioGroup>

                    <Input
                      placeholder="Contact phone (optional)"
                      value={settings.phone}
                      onChange={(e) => setSettings(prev => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Email preference</Label>
                  <p className="text-sm text-muted-foreground">
                    Select which emails you would like to receive in addition to the occasional service announcement emails.
                  </p>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Account updates</Label>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          checked={settings.emailPreferences.automaticExperiments}
                          onCheckedChange={() => handleEmailPreferenceChange("automaticExperiments")}
                        />
                        <Label>Automatic experiments report</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          checked={settings.emailPreferences.policyReport}
                          onCheckedChange={() => handleEmailPreferenceChange("policyReport")}
                        />
                        <Label>Daily AdSense Policy Report</Label>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Marketing emails</Label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            checked={settings.emailPreferences.customizedHelp}
                            onCheckedChange={() => handleEmailPreferenceChange("customizedHelp")}
                          />
                          <Label>Customised help and performance suggestions</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            checked={settings.emailPreferences.periodicNewsletters}
                            onCheckedChange={() => handleEmailPreferenceChange("periodicNewsletters")}
                          />
                          <Label>Periodic newsletters with tips and best practices</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            checked={settings.emailPreferences.occasionalSurveys}
                            onCheckedChange={() => handleEmailPreferenceChange("occasionalSurveys")}
                          />
                          <Label>Occasional surveys to help Google improve this product</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            checked={settings.emailPreferences.specialOffers}
                            onCheckedChange={() => handleEmailPreferenceChange("specialOffers")}
                          />
                          <Label>Special Offers</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            checked={settings.emailPreferences.otherProducts}
                            onCheckedChange={() => handleEmailPreferenceChange("otherProducts")}
                          />
                          <Label>Information about other Google products and services which may be of interest to you</Label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Display language</Label>
                  <Select
                    value={settings.displayLanguage}
                    onValueChange={(value) => setSettings(prev => ({ ...prev, displayLanguage: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue>{settings.displayLanguage}</SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="English (United Kingdom)">English (United Kingdom)</SelectItem>
                      <SelectItem value="English (United States)">English (United States)</SelectItem>
                      <SelectItem value="Hindi">Hindi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex justify-end gap-2 pt-4 border-t">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}