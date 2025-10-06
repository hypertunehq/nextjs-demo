import AIMessageLauncher from '@/lib/components/AIMessageLauncher'
import OnboardingChecklist from '@/lib/components/OnboardingChecklist'

export default async function AppHomePage() {
  return (
    <div className="flex flex-col gap-3">
      <OnboardingChecklist />
      <div className="flex flex-col items-start gap-2 rounded-lg border border-intent-primary bg-intent-primary/5 p-2 text-intent-primary">
        <AIMessageLauncher />
      </div>
    </div>
  )
}
