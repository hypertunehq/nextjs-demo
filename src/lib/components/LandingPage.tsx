'use client'

import { useHypertune } from '@/generated/hypertune.react'
import Link from 'next/link'
import { Flask } from '@phosphor-icons/react'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function LandingPage(): React.ReactElement {
  const hypertune = useHypertune()
  const isReady = hypertune.isReady()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!isReady) {
      return
    }
    hypertune.events().pageView({
      args: {
        href: `${window.location.origin}${pathname}?${searchParams.toString()}`,
        userAgent: navigator.userAgent,
      },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReady, pathname, searchParams])

  const content = hypertune.landing()
  const headline = content.headline({
    fallback: 'Welcome to Potion',
  })
  const layout = content.layout({ fallback: 'vertical' })

  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-intent-primary to-intent-success text-white">
      {/* Header */}
      <header className="flex w-full items-center justify-between px-6 py-4">
        <div className="text-2xl flex flex-row items-center gap-2 font-semibold text-white/95">
          <Flask weight="duotone" size={28} /> Potion
        </div>
        <Link
          href="/app"
          className="rounded-lg border border-white/15 bg-white/10 px-5 py-2.5 font-semibold text-white hover:bg-white/20"
          style={{ fontSize: '16px' }}
          onClick={() => {
            hypertune.events().signUp({
              args: { userAgent: navigator.userAgent },
            })
          }}
        >
          Get started
        </Link>
      </header>
      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 py-20 text-center">
        <div
          className={`flex ${layout === 'vertical' ? 'flex-col' : 'flex-row'} items-center justify-center gap-6`}
        >
          <h1 className="text-6xl font-extrabold max-w-5xl tracking-tight sm:text-[5rem]">
            {headline}
          </h1>
        </div>
        <p className="text-xl mt-4 max-w-3xl text-white/90">
          The connected workspace where teams create docs, plan projects,
          organize knowledge, and collaborate in real-time—all in one place.
        </p>
        <div className="mt-8">
          <Link
            className="inline-flex items-center rounded-lg border border-white/15 bg-white/10 px-5 font-semibold text-white hover:bg-white/20"
            style={{ fontSize: '16px', height: '46px' }}
            href="/app"
            onClick={() => {
              hypertune.events().signUp({
                args: { userAgent: navigator.userAgent },
              })
            }}
          >
            Get started →
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">
            <h3 className="text-2xl font-semibold">Work together</h3>
            <p className="mt-2 text-white/90">
              Collaborate on documents, tasks, and wikis with real‑time editing
              and comments.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">
            <h3 className="text-2xl font-semibold">Stay organized</h3>
            <p className="mt-2 text-white/90">
              Flexible pages, databases, and views to keep everything searchable
              and structured.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">
            <h3 className="text-2xl font-semibold">Move faster with AI</h3>
            <p className="mt-2 text-white/90">
              Summarize notes, draft docs, and generate action items directly in
              your workspace.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl" style={{ fontWeight: 700 }}>
            Features
          </h2>
          <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <li className="rounded-lg border border-white/10 bg-white/10 p-5">
              <h4 className="text-xl font-semibold">Docs & wikis</h4>
              <p className="mt-1 text-white/90">
                Capture knowledge with rich text, embeds, and simple
                organization.
              </p>
            </li>
            <li className="rounded-lg border border-white/10 bg-white/10 p-5">
              <h4 className="text-xl font-semibold">Tasks & projects</h4>
              <p className="mt-1 text-white/90">
                Plan sprints, assign tasks, and track progress with databases
                and views.
              </p>
            </li>
            <li className="rounded-lg border border-white/10 bg-white/10 p-5">
              <h4 className="text-xl font-semibold">Templates</h4>
              <p className="mt-1 text-white/90">
                Start quickly with pre‑built pages for roadmaps, notes, and
                more.
              </p>
            </li>
            <li className="rounded-lg border border-white/10 bg-white/10 p-5">
              <h4 className="text-xl font-semibold">Integrations</h4>
              <p className="mt-1 text-white/90">
                Connect your tools to keep work in sync—calendar, chat, and
                more.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-white/10 bg-black/10 px-6 py-8">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4">
          <div>
            <h5 className="text-lg font-semibold">Product</h5>
            <ul className="mt-2 space-y-1 text-white/90">
              <li>
                <Link href="/app">App</Link>
              </li>
              <li>
                <Link href="/app/plans">Plans</Link>
              </li>
              <li>
                <Link href="/app/team">Team</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold">Company</h5>
            <ul className="mt-2 space-y-1 text-white/90">
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Careers</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold">Resources</h5>
            <ul className="mt-2 space-y-1 text-white/90">
              <li>
                <Link href="#">Docs</Link>
              </li>
              <li>
                <Link href="#">Changelog</Link>
              </li>
              <li>
                <Link href="#">Status</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold">Legal</h5>
            <ul className="mt-2 space-y-1 text-white/90">
              <li>
                <Link href="#">Privacy</Link>
              </li>
              <li>
                <Link href="#">Terms</Link>
              </li>
              <li>
                <Link href="#">Security</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-6 max-w-6xl text-sm text-white/70">
          © {new Date().getFullYear()} Potion. All rights reserved.
        </div>
      </footer>
    </main>
  )
}
