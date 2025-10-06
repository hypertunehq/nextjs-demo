'use client'

import { useHypertune } from '@/generated/hypertune.react'
import { Flask } from '@phosphor-icons/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function TopBar(): React.ReactElement | null {
  const hypertune = useHypertune()
  const isReady = hypertune.isReady()
  const pathname = usePathname()

  useEffect(() => {
    if (!isReady) {
      return
    }
    hypertune.events().pageView({
      args: {
        href: `${window.location.origin}${pathname}`,
        userAgent: navigator.userAgent,
      },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReady, pathname])

  return (
    <div className="w-full border-b px-3 py-2">
      <Link
        href="/"
        className="flex flex-row items-center gap-2 text-h3 font-semibold"
      >
        <Flask weight="duotone" /> Potion
      </Link>
    </div>
  )
}
