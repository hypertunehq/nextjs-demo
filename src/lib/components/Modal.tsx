'use client'

import React from 'react'
import twMerge from '@/lib/twMerge'

type ModalProps = {
  open: boolean
  title: string
  description?: string
  children: React.ReactNode
  primaryAction?: {
    label: string
    onClick: () => void
    disabled?: boolean
  }
  secondaryAction?: { label: string; onClick: () => void }
  onClose: () => void
  className?: string
}

export default function Modal({
  open,
  title,
  description,
  children,
  primaryAction,
  secondaryAction,
  onClose,
  className,
}: ModalProps): React.ReactElement | null {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/30"
        onClick={onClose}
        aria-hidden
      />
      <div
        role="dialog"
        aria-modal="true"
        className={twMerge(
          'dark:border-gray-800 dark:bg-gray-900 relative z-10 w-full max-w-md rounded-lg border border-bd-darker bg-white p-4 shadow-lg',
          className ?? ''
        )}
      >
        <div className="mb-3">
          <h2 className="text-h3 font-semibold">{title}</h2>
          {description && (
            <p className="mt-1 text-sm text-tx-muted">{description}</p>
          )}
        </div>

        <div className="flex flex-col gap-3">{children}</div>

        <div className="mt-4 flex items-center justify-end gap-2">
          {secondaryAction && (
            <button
              type="button"
              className="rounded-md border border-bd-darker px-3 py-2 text-sm"
              onClick={secondaryAction.onClick}
            >
              {secondaryAction.label}
            </button>
          )}
          {primaryAction && (
            <button
              type="button"
              disabled={primaryAction.disabled}
              className={twMerge(
                'rounded-md bg-intent-primary px-3 py-2 text-sm font-medium text-white',
                primaryAction.disabled ? 'opacity-50' : ''
              )}
              onClick={primaryAction.onClick}
            >
              {primaryAction.label}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
