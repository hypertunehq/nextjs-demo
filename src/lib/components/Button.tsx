import React from 'react'
import { Intent } from '@/lib/intent'
import twMerge from '@/lib/twMerge'

export type Size =
  | 'x-small'
  | 'small'
  | 'default'
  | 'large'
  | 'x-large'
  | '2x-large'

export type Weight = 'default' | 'minimal' | 'filled' | 'outlined' | 'elevated'

/* The existing Button is primarily used for the logic UI
 * editor. IconButton is primarily aimed everywhere else,
 * e.g. the business settings.
 */
export default function Button({
  text,
  title,
  icon,
  iconEnd,
  intent = 'neutral',
  weight = 'default',
  size = 'default',
  disabled,
  onClick,
  className,
}: {
  text?: string
  title?: string
  icon?: React.ReactNode
  iconEnd?: React.ReactNode
  intent?: Intent
  weight?: Weight
  size?: Size
  disabled?: boolean
  onClick?: () => void
  className?: string
}): React.ReactElement {
  const isDisabled = disabled

  return (
    <button
      title={title ?? text}
      disabled={isDisabled}
      onClick={
        !isDisabled && onClick
          ? (event) => {
              event.stopPropagation()
              onClick()
            }
          : undefined
      }
      type="button"
      className={twMerge(
        `flex select-none items-center justify-center text-base font-medium leading-3 ${isDisabled ? 'cursor-default opacity-50' : 'cursor-pointer'} ${intentAndWeightClassName[intent][weight]} ${sizeToClassName(size)} ${sizeToGap(size)}`,
        className ?? ''
      )}
    >
      <div className={`flex items-center justify-center ${sizeToGap(size)}`}>
        {icon && <span>{icon}</span>}
        {text && <span className="font-inherit whitespace-nowrap">{text}</span>}
      </div>

      {iconEnd && <span>{iconEnd}</span>}
    </button>
  )
}

function sizeToGap(size: Size): string {
  switch (size) {
    case 'x-small':
      return 'gap-[4px]'
    case 'small':
      return 'gap-[5px]'
    case 'large':
      return 'gap-[7px]'
    case 'x-large':
      return 'gap-[9px]'
    case '2x-large':
      return 'gap-[9px]'
    default:
      return 'gap-[5px]'
  }
}

function sizeToClassName(size: Size): string {
  switch (size) {
    case 'x-small':
      return 'h-[20px] px-[3px] py-[4px] rounded-md'
    case 'small':
      return 'h-[26px] px-[10px] py-[7px] rounded-lg '
    case 'large':
      return 'h-[32px] px-[8px] py-[8px] rounded-lg'
    case 'x-large':
      return 'h-[36px] px-[9px] py-[8px] rounded-lg'
    case '2x-large':
      return 'h-[40px] px-[9px] py-[8px] rounded-lg'
    default:
      return 'h-[30px] px-[7px] py-[7px] rounded-lg'
  }
}

const intentAndWeightClassName = {
  primary: {
    default: `text-intent-primary bg-transparent enabled:hover:bg-intent-primary/5
      border border-transparent`,
    minimal: `text-intent-primary bg-intent-primary/5 enabled:hover:bg-intent-primary/10
      border border-transparent`,
    filled: `text-white bg-intent-primary enabled:hover:bg-intent-primary/90
      border border-transparent`,
    outlined: `text-intent-primary bg-white enabled:hover:bg-intent-primary/5
      border border-intent-primary/10`,
    elevated: `text-intent-primary bg-white enabled:hover:bg-intent-primary/5
      border border-intent-primary/20
      shadow-button`,
  },
  neutral: {
    default: `text-intent-neutral bg-transparent enabled:hover:bg-intent-neutral/5
     border border-transparent`,
    minimal: `text-intent-neutral bg-intent-neutral/5 enabled:hover:bg-intent-neutral/10
     border border-transparent`,
    filled: `text-white bg-intent-neutral enabled:hover:bg-intent-neutral/90
     border border-transparent`,
    outlined: `text-intent-neutral bg-white enabled:hover:bg-intent-neutral/5
      border border-intent-neutral/10`,
    elevated: `text-intent-neutral bg-white enabled:hover:bg-intent-neutral/5
      border border-intent-neutral/20
      shadow-button`,
  },
  warning: {
    default: `text-intent-warning bg-transparent enabled:hover:bg-intent-warning/5
       border border-transparent`,
    minimal: `text-intent-warning bg-intent-warning/5 enabled:hover:bg-intent-warning/10
       border border-transparent`,
    filled: `text-white bg-intent-warning enabled:hover:bg-intent-warning/90
       border border-transparent`,
    outlined: `text-intent-warning bg-white enabled:hover:bg-intent-warning/5
      border border-intent-warning/10`,
    elevated: `text-intent-warning bg-white enabled:hover:bg-intent-warning/5
      border border-intent-warning/20
      shadow-button`,
  },
  danger: {
    default: `text-intent-danger bg-transparent enabled:hover:bg-intent-danger/5
       border border-transparent`,
    minimal: `text-intent-danger bg-intent-danger/5 enabled:hover:bg-intent-danger/10
       border border-transparent`,
    filled: `text-white bg-intent-danger enabled:hover:bg-intent-danger/90
       border border-transparent`,
    outlined: `text-intent-danger bg-white enabled:hover:bg-intent-danger/5
      border border-intent-danger/10`,
    elevated: `text-intent-danger bg-white enabled:hover:bg-intent-danger/5
      border border-intent-danger/20
      shadow-button`,
  },
  success: {
    default: `text-intent-success bg-transparent enabled:hover:bg-intent-success/5
      border border-transparent`,
    minimal: `text-intent-success bg-intent-success/5 enabled:hover:bg-intent-success/10
      border border-transparent`,
    filled: `text-white bg-intent-success enabled:hover:bg-intent-success/90
      border border-transparent`,
    outlined: `text-intent-success bg-white enabled:hover:bg-intent-success/5
      border border-intent-success/10`,
    elevated: `text-intent-success bg-white enabled:hover:bg-intent-success/5
      border border-intent-success/20
      shadow-button`,
  },
}
