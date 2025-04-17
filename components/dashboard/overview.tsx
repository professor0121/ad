"use client";

import { Suspense, useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, MoreVertical, ExternalLink, MonitorSmartphone, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LoadingSpinner } from "@/components/loading-spinner"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import Rechart from '@/components/ui/rechart'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 700 },
  { name: "Jun", value: 900 },
  { name: "Jul", value: 1100 },
]

interface EarningsData {
  today: number;
  yesterday: number;
  last7Days: number;
  thisMonth: number;
  lastMonth: number;
  lastYear: number;
  pageViews: number;
  pageRPM: number;
  impressions: number;
  clicks: number;
  cpc: number;
  pageCTR: number;
  activeUsers: number;
  avgSessionDuration: number;
  bounceRate: number;
}

const generateRandomChange = (min: number = -30, max: number = 30) => {
  return (100 + Math.random() * (max - min) + min) / 100;
}

const calculateStats = (todayEarnings: number): EarningsData => {
  const yesterday = todayEarnings * generateRandomChange();
  
  // Calculate last 7 days with random variations
  let last7Days = todayEarnings + yesterday;
  for (let i = 0; i < 5; i++) {
    last7Days += todayEarnings * generateRandomChange(-20, 40);
  }
  
  // Calculate this month (assuming ~30 days)
  const avgDailyEarning = (todayEarnings + yesterday) / 2;
  const thisMonth = avgDailyEarning * 30 * generateRandomChange(-10, 20);
  const lastMonth = thisMonth * generateRandomChange(-15, 25);
  const lastYear = lastMonth * 12 * generateRandomChange(-20, 30);
  
  // Calculate related metrics
  const pageViews = Math.round(todayEarnings * 100 * generateRandomChange());
  const pageRPM = Number((todayEarnings / pageViews * 1000).toFixed(2));
  const impressions = Math.round(pageViews * 2.5 * generateRandomChange());
  const clicks = Math.round(pageViews * 0.02 * generateRandomChange());
  const cpc = Number((todayEarnings / clicks).toFixed(2));
  const pageCTR = Number((clicks / pageViews * 100).toFixed(2));
  const activeUsers = Math.round(pageViews * 0.7 * generateRandomChange());
  const avgSessionDuration = Math.round(120 * generateRandomChange());
  const bounceRate = Number((35 + Math.random() * 20).toFixed(1));

  return {
    today: Number(todayEarnings.toFixed(2)),
    yesterday: Number(yesterday.toFixed(2)),
    last7Days: Number(last7Days.toFixed(2)),
    thisMonth: Number(thisMonth.toFixed(2)),
    lastMonth: Number(lastMonth.toFixed(2)),
    lastYear: Number(lastYear.toFixed(2)),
    pageViews,
    pageRPM,
    impressions,
    clicks,
    cpc,
    pageCTR,
    activeUsers,
    avgSessionDuration,
    bounceRate
  };
}

export function Overview() {
  const [manualMode, setManualMode] = useState(false);
  const [baseEarnings, setBaseEarnings] = useState(0.09);
  const [stats, setStats] = useState<EarningsData>({
    today: 0.09,
    yesterday: 0.13,
    last7Days: 1.64,
    thisMonth: 0.09,
    lastMonth: 0.08,
    lastYear: 0.95,
    pageViews: 2920,
    pageRPM: 0.56,
    impressions: 6320,
    clicks: 41,
    cpc: 0.04,
    pageCTR: 1.40,
    activeUsers: 2044,
    avgSessionDuration: 125,
    bounceRate: 42.5
  });
  
  useEffect(() => {
    if (!manualMode) {
      setStats(calculateStats(baseEarnings));
    }
  }, [baseEarnings, manualMode]);

  // Initial client-side calculation after mount
  useEffect(() => {
    if (!manualMode) {
      setStats(calculateStats(0.09));
    }
  }, []);

  return (
    <div className="space-y-6">
      {/* <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-normal">Stats Configuration</CardTitle>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm">Manual Mode</span>
                <Switch
                  checked={manualMode}
                  onCheckedChange={setManualMode}
                />
              </div>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <label className="text-sm text-muted-foreground mb-2 block">
                {manualMode ? "Manual Today's Earnings" : "Base Earnings (Auto-calculate)"}
              </label>
              <Input
                type="number"
                value={manualMode ? stats.today : baseEarnings}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (manualMode) {
                    setStats(prev => ({ ...prev, today: value }));
                  } else {
                    setBaseEarnings(value);
                  }
                }}
                step="0.01"
                min="0"
              />
            </div>
            {manualMode && (
              <>
                <div className="flex-1">
                  <label className="text-sm text-muted-foreground mb-2 block">Yesterday's Earnings</label>
                  <Input
                    type="number"
                    value={stats.yesterday}
                    onChange={(e) => setStats(prev => ({ ...prev, yesterday: Number(e.target.value) }))}
                    step="0.01"
                    min="0"
                  />
                </div>
                <div className="flex-1">
                  <label className="text-sm text-muted-foreground mb-2 block">Last 7 Days</label>
                  <Input
                    type="number"
                    value={stats.last7Days}
                    onChange={(e) => setStats(prev => ({ ...prev, last7Days: Number(e.target.value) }))}
                    step="0.01"
                    min="0"
                  />
                </div>
                <div className="flex-1">
                  <label className="text-sm text-muted-foreground mb-2 block">This Month</label>
                  <Input
                    type="number"
                    value={stats.thisMonth}
                    onChange={(e) => setStats(prev => ({ ...prev, thisMonth: Number(e.target.value) }))}
                    step="0.01"
                    min="0"
                  />
                </div>
              </>
            )}
          </div>
        </CardContent>
      </Card> */}

      <Suspense fallback={<LoadingSpinner />}>
        <div className="grid gap-4 lg:grid-cols-6">
        <Card className="bg-[#1565c0] text-white col-span-5">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-normal">Estimated earnings</CardTitle>
              <Button variant="ghost" size="icon" className="text-white hover:text-white/90">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-8 md:grid-cols-4">
              <div>
                <div className="text-sm mb-1">Today so far</div>
                <div className="text-2xl font-normal">US${stats.today.toFixed(2)}</div>
              </div>
              <div>
                <div className="text-sm mb-1">Yesterday</div>
                <div className="text-2xl font-normal">US${stats.yesterday.toFixed(2)}</div>
                <div className="text-sm mt-1 flex items-center gap-1">
                  <span className={`text-${stats.yesterday > stats.today ? 'green' : 'red'}-200`}>
                    {stats.yesterday > stats.today ? '▲' : '▼'} 
                    {stats.yesterday > stats.today ? '+' : '-'}US$
                    {Math.abs(stats.yesterday - stats.today).toFixed(2)} 
                    ({Math.abs(((stats.yesterday - stats.today) / stats.today) * 100).toFixed(0)}%)
                  </span>
                  <span className="text-sm opacity-80">vs. same day last week</span>
                </div>
              </div>
              <div>
                <div className="text-sm mb-1">Last 7 days</div>
                <div className="text-2xl font-normal">US${stats.last7Days.toFixed(2)}</div>
                <div className="text-sm mt-1 flex items-center gap-1">
                  <span className="text-red-200">
                    ▼ -US${(stats.last7Days * 0.61).toFixed(2)} (-61%)
                  </span>
                  <span className="text-sm opacity-80">vs previous 7 days</span>
                </div>
              </div>
              <div>
                <div className="text-sm mb-1">This month</div>
                <div className="text-2xl font-normal">US${stats.thisMonth.toFixed(2)}</div>
                <div className="text-sm mt-1 flex items-center gap-1">
                  <span className={`text-${stats.thisMonth > stats.lastMonth ? 'green' : 'red'}-200`}>
                    {stats.thisMonth > stats.lastMonth ? '▲' : '▼'} 
                    {stats.thisMonth > stats.lastMonth ? '+' : '-'}US$
                    {Math.abs(stats.thisMonth - stats.lastMonth).toFixed(2)} 
                    ({Math.abs(((stats.thisMonth - stats.lastMonth) / stats.lastMonth) * 100).toFixed(0)}%)
                  </span>
                  <span className="text-sm opacity-80">vs last month</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#1565c0] text-white">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-normal">Balance</CardTitle>
              <Button variant="ghost" size="icon" className="text-white hover:text-white/90">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-normal mb-1">$72.65</div>
            <div className="text-sm opacity-80">
              Last payment<br />$114.70
            </div>
            <div className="text-xs mt-2 opacity-70">
              Next payment estimated: ${(stats.thisMonth * 0.85).toFixed(2)}
            </div>
          </CardContent>
        </Card>
      </div>
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}> 
        <div className="flex flex-wrap gap-4">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex   justify-between">
              <CardTitle  className="text-[1.125rem] font-normal  flex flex-col pl-0 gap-2">
                Performance
                <Button style={{paddingLeft:'0px'}} variant="ghost" size="sm" className="h-6 text-xs font-normal">
                  Last 7 days vs previous 7 days
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </CardTitle>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="grid gap-4">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Page views</div>
                  <div className="text-xl font-normal">{(stats.pageViews / 1000).toFixed(2)}K</div>
                  <div className="text-sm">
                    <span>{(stats.activeUsers / 1000).toFixed(1)}K</span>
                  </div>
                  <Rechart height="60px" width="60px"/>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Page RPM</div>
                  <div className="text-xl font-normal">US${stats.pageRPM.toFixed(2)}</div>
                  <div className="text-sm">
                    <span>{stats.bounceRate}%</span>
                  </div>
                  <Rechart height="60px" width="60px"/>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Impressions</div>
                  <div className="text-xl font-normal">{(stats.impressions / 1000).toFixed(2)}K</div>
                  <div className="text-sm">
                    <span>{stats.avgSessionDuration}s</span>
                  </div>
                  <Rechart height="60px" width="60px"/>

                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Clicks</div>
                  <div className="text-xl font-normal">{stats.clicks}</div>
                  <div className="text-sm text-[hsl(var(--adsense-red))]">
                    -{Math.round(stats.clicks * 0.72)} (-72%)
                  </div>
                  <Rechart height="60px" width="60px"/>

                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">CPC</div>
                  <div className="text-xl font-normal">US${stats.cpc.toFixed(2)}</div>
                  <div className="text-sm text-[hsl(var(--adsense-green))]">
                    +US${(stats.cpc * 0.33).toFixed(2)} (+33%)
                  </div>
                  <Rechart height="60px" width="60px"/>

                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Page CTR</div>
                  <div className="text-xl font-normal">{stats.pageCTR.toFixed(2)}%</div>
                  <div className="text-sm text-[hsl(var(--adsense-red))]">
                    -{(stats.pageCTR * 0.63).toFixed(2)}pp (-63%)
                  </div>
                  <Rechart height="60px" width="60px"/>

                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-normal">Sites</CardTitle>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Last 7 days</span>
                  <ChevronDown className="h-4 w-4" />
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-4 gap-4 text-sm">
                    <div>Site</div>
                    <div className="text-center">Estimated</div>
                    <div className="text-center">Page views</div>
                    <div className="text-center">Clicks</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="text-sm">lebely.com</div>
                    <div className="text-center">US$1.08</div>
                    <div className="text-center">1.85K</div>
                    <div className="text-center">34</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="text-sm">youtube-playlist-length...</div>
                    <div className="text-center">US$0.50</div>
                    <div className="text-center">943</div>
                    <div className="text-center">7</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="text-sm">youtubeplaylistlength...</div>
                    <div className="text-center">US$0.05</div>
                    <div className="text-center">117</div>
                    <div className="text-center">0</div>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="w-full text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                  <span>View report</span>
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>


        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-normal">Optimisation</CardTitle>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                We analysed your sites and found a new opportunity to potentially increase your revenue.
              </p>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-blue-100 p-2 dark:bg-blue-900">
                  <MonitorSmartphone className="h-6 w-6 text-[hsl(var(--adsense-blue))]" />
                </div>
                <div>
                  <h3 className="text-sm font-medium">Boost your revenue with ad intents</h3>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="w-full text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                <span>View opportunities</span>
                <ExternalLink className="ml-1 h-3 w-3" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-normal">Countries</CardTitle>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Last 7 days</span>
                  <ChevronDown className="h-4 w-4" />
                </div>
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={[
                      { date: '25 Mar', India: 0.98, US: 0.22, Canada: 0.08, UAE: 0.06, UK: 0.05 },
                      { date: '27 Mar', India: 0.75, US: 0.24, Canada: 0.09, UAE: 0.07, UK: 0.06 },
                      { date: '29 Mar', India: 0.95, US: 0.26, Canada: 0.08, UAE: 0.08, UK: 0.07 },
                      { date: '31 Mar', India: 0.65, US: 0.25, Canada: 0.09, UAE: 0.06, UK: 0.05 }
                    ]}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" fontSize={12} tickMargin={10} />
                      <YAxis fontSize={12} tickMargin={10} />
                      <Tooltip />
                      <Line type="monotone" dataKey="India" stroke="#1976D2" strokeWidth={2} dot={false} />
                      <Line type="monotone" dataKey="US" stroke="#D32F2F" strokeWidth={2} dot={false} />
                      <Line type="monotone" dataKey="Canada" stroke="#FFA000" strokeWidth={2} dot={false} />
                      <Line type="monotone" dataKey="UAE" stroke="#388E3C" strokeWidth={2} dot={false} />
                      <Line type="monotone" dataKey="UK" stroke="#7B1FA2" strokeWidth={2} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>India</span>
                    <span>US$0.98</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>United States</span>
                    <span>US$0.22</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Canada</span>
                    <span>US$0.08</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>United Arab Emirates</span>
                    <span>US$0.06</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>United Kingdom</span>
                    <span>US$0.05</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="w-full text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                  <span>View report</span>
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-normal">Countries</CardTitle>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Last 7 days vs previous 7 days</span>
                  <ChevronDown className="h-4 w-4" />
                </div>
                <div className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between text-sm">
                        <span>India</span>
                        <span className="text-[hsl(var(--adsense-red))]">-US$2.35 (-71%)</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="h-2 flex-1 rounded-full bg-blue-100">
                          <div className="h-full w-[33%] rounded-full bg-[hsl(var(--adsense-blue))]" />
                        </div>
                        <span className="text-sm">US$1.08</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="h-2 flex-1 rounded-full bg-blue-100">
                          <div className="h-full w-full rounded-full bg-[hsl(var(--adsense-blue))] opacity-40" />
                        </div>
                        <span className="text-sm text-muted-foreground">US$3.30</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="truncate">youtube-playlist-length-calculator.onrender.com</span>
                        <span className="text-[hsl(var(--adsense-red))]">-US$0.25 (-33%)</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="h-2 flex-1 rounded-full bg-blue-100">
                          <div className="h-full w-[40%] rounded-full bg-[hsl(var(--adsense-blue))]" />
                        </div>
                        <span className="text-sm">US$0.50</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="h-2 flex-1 rounded-full bg-blue-100">
                          <div className="h-full w-[60%] rounded-full bg-[hsl(var(--adsense-blue))] opacity-40" />
                        </div>
                        <span className="text-sm text-muted-foreground">US$0.75</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-sm">
                        <span>youtubeplaylistlength.com</span>
                        <span className="text-[hsl(var(--adsense-red))]">-US$0.06 (-55%)</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="h-2 flex-1 rounded-full bg-blue-100">
                          <div className="h-full w-[45%] rounded-full bg-[hsl(var(--adsense-blue))]" />
                        </div>
                        <span className="text-sm">US$0.05</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="h-2 flex-1 rounded-full bg-blue-100">
                          <div className="h-full w-full rounded-full bg-[hsl(var(--adsense-blue))] opacity-40" />
                        </div>
                        <span className="text-sm text-muted-foreground">US$0.11</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-sm">
                        <span>blogingco.com</span>
                        <span className="text-[hsl(var(--adsense-red))]">-US$0.01 (-100%)</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="h-2 flex-1 rounded-full bg-blue-100">
                          <div className="h-full w-0 rounded-full bg-[hsl(var(--adsense-blue))]" />
                        </div>
                        <span className="text-sm">US$0.00</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="h-2 flex-1 rounded-full bg-blue-100">
                          <div className="h-full w-[10%] rounded-full bg-[hsl(var(--adsense-blue))] opacity-40" />
                        </div>
                        <span className="text-sm text-muted-foreground">US$0.01</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="w-full text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                  <span>View report</span>
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Suspense>
    </div>
  )
}