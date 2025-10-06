import React from 'react'
import TopBar from '@/lib/components/TopBar'
import Sidebar from '@/lib/components/Sidebar'

export default function AppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex h-screen w-full flex-col">
      <TopBar />
      <div className="flex h-full flex-row overflow-hidden text-base">
        <Sidebar />
        <div className="h-full w-full overflow-auto p-4">{children}</div>
      </div>
    </main>
  )
}
