export type Intent = 'primary' | 'neutral' | 'warning' | 'danger' | 'success'

export function intentToTextColorName(intent: Intent): string {
  switch (intent) {
    case 'primary':
      return 'text-intent-primary'
    case 'neutral':
      return 'text-tx-default'
    case 'warning':
      return 'text-intent-warning'
    case 'danger':
      return 'text-intent-danger'
    case 'success':
      return 'text-intent-success'
    default:
      return 'text-tx-default'
  }
}
