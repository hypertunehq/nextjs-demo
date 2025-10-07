'use client'

import { useState } from 'react'
import twMerge from '../twMerge'

export default function AIRecommendation() {
  const [generation, setGeneration] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div
      className={twMerge(
        'flex flex-col items-start gap-2 rounded-lg border border-intent-primary bg-intent-primary/5 p-2 text-intent-primary',
        !generation && !isLoading ? 'cursor-pointer font-semibold' : ''
      )}
      onClick={async () => {
        setIsLoading(true)

        await fetch('/api/completion', {
          method: 'POST',
          body: JSON.stringify({
            prompt: 'Why is the sky blue?',
          }),
        }).then((response) => {
          response
            .json()
            .then((json) => {
              setGeneration(json.text)
            })
            .catch((error) => {
              console.error('Error:', error)
            })
            .finally(() => {
              setIsLoading(false)
            })
        })
      }}
    >
      {isLoading
        ? 'Loading...'
        : generation
          ? generation
          : 'Get your latest AI recommendation on how to make the most of your Potion workspace'}
    </div>
  )
}
