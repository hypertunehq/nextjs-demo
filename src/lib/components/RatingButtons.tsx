'use client'

import { useHypertune } from '@/generated/hypertune.react'
import Button from '@/lib/components/Button'
import { ThumbsDown, ThumbsUp } from '@phosphor-icons/react'
import { intentPrimaryHex } from '@/lib//constants'

export default function RatingButtons() {
  const hypertune = useHypertune()

  return (
    <div className="flex flex-row items-center gap-2">
      <Button
        icon={<ThumbsDown color={intentPrimaryHex} />}
        intent="primary"
        weight="minimal"
        onClick={() => {
          hypertune.events().thumbsDown()
        }}
      />
      <Button
        icon={<ThumbsUp color={intentPrimaryHex} />}
        intent="primary"
        weight="minimal"
        onClick={() => {
          hypertune.events().thumbsUp()
        }}
      />
    </div>
  )
}
