'use client'

import { Check } from '@phosphor-icons/react'
import { useHypertune } from '@/generated/hypertune.react'
import { PlanType, PlanTypeEnumValues } from '@/generated/hypertune'
import twMerge from '@/lib/twMerge'
import Button from '@/lib/components/Button'
import { intentPrimaryHex } from '@/lib/constants'

export default function Plans(): React.ReactElement | null {
  const currentPlan: PlanType = 'free'

  const hypertune = useHypertune()

  return (
    <div className="grid min-w-[675px] grid-cols-9">
      <RowName
        name="Plans"
        className="flex-col items-start px-[30px] pt-4 text-h1 font-semibold text-tx-default"
        wrapperClassName="px-0"
      />
      {PlanTypeEnumValues.map((plan) => (
        <PlanHeader
          key={plan}
          plan={plan}
          currentPlan={currentPlan}
          price={hypertune.price({
            args: { plan },
            fallback: 0,
          })}
        />
      ))}
      {hypertune.featureGrid().map((group) => (
        <>
          {group.name && (
            <FeatureGroupHeaderRow
              name={group.name({ fallback: '' })}
              currentPlan={currentPlan}
            />
          )}
          {group.feature().map((feature) => {
            const name = feature.name({ fallback: '' })
            return (
              <>
                <RowName name={name} />
                {PlanTypeEnumValues.map((plan) => {
                  const { enabled, text } = feature
                    .planData({ args: { plan } })
                    .get()

                  return (
                    <FeatureCell
                      key={`${plan}-${name}`}
                      enabled={enabled}
                      text={text}
                      isCurrent={plan === currentPlan}
                    />
                  )
                })}
              </>
            )
          })}
        </>
      ))}
      <FeatureGroupHeaderRow
        name=""
        currentPlan={currentPlan}
        className="min-h-[42px]"
        cellWrapperClassName="rounded-bl-lg rounded-br-lg"
      />
    </div>
  )
}

function PlanHeader({
  plan,
  price,
  currentPlan,
}: {
  plan: PlanType
  price: number
  currentPlan: PlanType | null
}): React.ReactElement | null {
  const hypertune = useHypertune()
  const code =
    typeof window !== undefined
      ? (new URL(window.location.href).searchParams.get('code') ?? '')
      : ''

  const discounts = hypertune
    .discounts({ args: { code, plan } })
    .map((discount) => discount.get())
    .filter((discount) => discount.isEnabled)

  const totalDiscount = discounts.reduce(
    (current, discount) => current + price * discount.percentage,
    0
  )

  const isCurrentPlan = plan === currentPlan

  return (
    <Cell
      className="flex flex-col items-stretch gap-3 px-[30px] pb-[10px] pt-[30px]"
      wrapperClassName="px-0 rounded-tl-lg rounded-tr-lg"
      isCurrent={isCurrentPlan}
    >
      <div className="flex flex-row items-center justify-between">
        <p className="text-h4 font-semibold">
          {plan.charAt(0).toUpperCase() + plan.substring(1)}
        </p>
      </div>
      <div>
        <p
          className={twMerge(
            'text-md text-tx-muted',
            totalDiscount > 0 && 'text-intent-danger line-through'
          )}
        >
          ${price} per month
        </p>
        {totalDiscount > 0 && (
          <>
            {discounts.map((discount) => (
              <p
                className="text-md text-intent-success"
                key={`${plan}-${discount.name}`}
              >
                {(discount.percentage * 100).toFixed(0)}% {discount.name}
              </p>
            ))}
          </>
        )}
        {totalDiscount > 0 && (
          <p className="text-md text-tx-muted">
            ${(price - totalDiscount).toFixed(2)} per month
          </p>
        )}
      </div>

      {currentPlan && (
        <Button
          size="x-large"
          weight="filled"
          disabled={isCurrentPlan}
          intent="primary"
          text={isCurrentPlan ? 'Current plan' : 'Upgrade'}
          className="mt-auto shadow-button"
          onClick={() => {
            // eslint-disable-next-line no-console
            console.log(`Clicked upgrade to ${plan}`)
            hypertune.events().upgrade({
              args: { plan, userAgent: navigator.userAgent },
            })
          }}
        />
      )}
      <div />
    </Cell>
  )
}

function FeatureGroupHeaderRow({
  name,
  currentPlan,
  className,
  cellWrapperClassName,
}: {
  name: string
  currentPlan: PlanType | null
  className?: string
  cellWrapperClassName?: string
}): React.ReactElement | null {
  return (
    <>
      <RowName
        name={name}
        className={twMerge(
          'min-h-[70px] items-end border-b-0 text-lg font-semibold text-tx-default',
          className
        )}
      />
      {PlanTypeEnumValues.map((planName) => (
        <Cell
          key={`header-${name}`}
          isCurrent={planName === currentPlan}
          className={twMerge('border-b-0', className)}
          wrapperClassName={cellWrapperClassName}
        />
      ))}
    </>
  )
}

function RowName({
  name,
  className,
  wrapperClassName,
}: {
  name: string
  className?: string
  wrapperClassName?: string
}): React.ReactElement | null {
  return (
    <Cell
      wrapperClassName={twMerge('col-span-3 text-tx-muted', wrapperClassName)}
      className={className}
      isCurrent={false}
    >
      {name}
    </Cell>
  )
}

function FeatureCell({
  enabled,
  text,
  isCurrent,
}: {
  enabled: boolean
  text: string
  isCurrent: boolean
}): React.ReactElement | null {
  return (
    <Cell isCurrent={isCurrent}>
      {text
        ? text
        : enabled && <Check weight="bold" color={intentPrimaryHex} size={20} />}
    </Cell>
  )
}

function Cell({
  children,
  isCurrent,
  wrapperClassName,
  className,
}: {
  children?: React.ReactNode
  isCurrent: boolean
  wrapperClassName?: string
  className?: string
}): React.ReactElement | null {
  return (
    <div
      className={twMerge(
        'col-span-2 px-[30px]',
        isCurrent && 'bg-intent-primary/5',
        wrapperClassName
      )}
    >
      <div
        className={twMerge(
          'flex h-full w-full flex-row items-center border-b py-[10px]',
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}
