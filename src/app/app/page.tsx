import OnboardingChecklist from '@/lib/components/OnboardingChecklist'
import AIRecommendation from '@/lib/components/AIRecommendation'
import getHypertune from '@/lib/getHypertune'
import { HypertuneClientLogger } from '@/generated/hypertune.react'

export default async function AppHomePage() {
  const hypertune = await getHypertune()

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-h1 font-semibold">
        Welcome to your Potion workspace
      </h1>
      <OnboardingChecklist />
      {hypertune.enableAIRecommendation({ fallback: false }) && (
        <AIRecommendation />
      )}
      <HypertuneClientLogger flagPaths={['enableAIRecommendation']} />
    </div>
  )
}
