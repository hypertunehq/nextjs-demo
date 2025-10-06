import Plans from '@/lib/components/Plans'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Plans - Potion',
}

export default function AppHomePage() {
  return <Plans />
}
