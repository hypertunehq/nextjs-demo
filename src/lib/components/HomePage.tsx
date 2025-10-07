'use client'

import OnboardingChecklist from '@/lib/components/OnboardingChecklist'
import AIRecommendation from '@/lib/components/AIRecommendation'
import { useHypertune } from '@/generated/hypertune.react'

export default function HomePage() {
  const hypertune = useHypertune()

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-h1 font-semibold">
        Welcome to your Potion workspace
      </h1>
      <OnboardingChecklist />
      <AIRecommendation />
    </div>
  )
}
