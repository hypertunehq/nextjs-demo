import { extendTailwindMerge } from 'tailwind-merge'
import tailwindConfig from '../../tailwind.config'

export default extendTailwindMerge({
  override: {
    classGroups: {
      shadow: [
        {
          shadow: Object.keys(
            tailwindConfig.theme?.extend?.boxShadowColor ?? {}
          ),
        },
      ],
      'font-size': [
        {
          text: Object.keys(tailwindConfig.theme?.fontSize ?? {}),
        },
      ],
      'font-weight': [
        {
          font: Object.keys(tailwindConfig.theme?.fontWeight ?? {}),
        },
      ],
    },
  },
})
