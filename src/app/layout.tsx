import '@/styles/globals.css'

import { type Metadata } from 'next'
import getHypertune from '@/lib/getHypertune'
import { HypertuneProvider } from '@/generated/hypertune.react'

export const metadata: Metadata = {
  title: 'Potion',
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const hypertune = await getHypertune()

  const serverDehydratedState = hypertune.dehydrate()
  const serverRootArgs = hypertune.getRootArgs()

  return (
    <HypertuneProvider
      createSourceOptions={{
        token: process.env.NEXT_PUBLIC_HYPERTUNE_TOKEN!,
      }}
      dehydratedState={serverDehydratedState}
      rootArgs={serverRootArgs}
    >
      <html lang="en">
        <body>{children}</body>
      </html>
    </HypertuneProvider>
  )
}
