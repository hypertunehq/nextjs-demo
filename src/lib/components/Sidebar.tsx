'use client'

import {
  Desktop,
  IconContext,
  IconProps,
  Folder,
  PaperPlaneTilt,
  User,
} from '@phosphor-icons/react'
import Link from 'next/link'
import { useMemo } from 'react'
import twMerge from '@/lib/twMerge'
import { usePathname } from 'next/navigation'

const routes: SidebarItemProps[] = [
  {
    name: 'Home',
    icon: <Desktop />,
    href: '/app',
  },
  {
    name: 'Projects',
    icon: <Folder />,
    href: '/app/projects',
  },
  {
    name: 'Team',
    icon: <User />,
    href: '/app/team',
  },
  {
    name: 'Plans',
    icon: <PaperPlaneTilt />,
    href: '/app/plans',
  },
]

type SidebarItemProps = {
  name: string
  icon: React.ReactNode
  href: string
}

export default function Sidebar(): React.ReactElement | null {
  return (
    <div className="flex h-full min-w-[220px] flex-col items-stretch border-r p-1">
      {routes.map((props) => (
        <SidebarItem key={`sidebar-${props.name}`} {...props} />
      ))}
    </div>
  )
}

function SidebarItem({
  name,
  icon,
  href,
}: SidebarItemProps): React.ReactElement | null {
  const pathname = usePathname()

  const isSelected = useMemo(() => pathname === href, [pathname, href])
  const iconProps: IconProps = useMemo(
    () =>
      isSelected
        ? { weight: 'fill', size: 16 }
        : { weight: 'duotone', size: 16, color: '#7A8396' },
    [isSelected]
  )
  return (
    <Link
      className={twMerge(
        'flex flex-row items-center gap-2 rounded-lg p-2 text-h5 hover:bg-bg-hover',
        isSelected &&
          'bg-intent-primary/5 text-intent-primary hover:bg-bg-hover/10'
      )}
      href={href}
    >
      <IconContext.Provider value={iconProps}>{icon}</IconContext.Provider>
      {name}
    </Link>
  )
}
