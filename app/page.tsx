import { Header } from "@/components/dashboard/header"
import { Overview } from "@/components/dashboard/overview"
import { Sidebar } from "@/components/dashboard/sidebar"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        <aside className="hidden w-64 shrink-0 border-r md:block">
          <Sidebar />
        </aside>
        <main className="flex-1 p-8">
          <Overview />
        </main>
      </div>
    </div>
  );
}
