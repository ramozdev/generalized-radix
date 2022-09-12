import { FC } from 'react'
import { generateSelectors, Items } from '../VariantGenerator'
import { badgeVariants } from '../Badge'

export type Interactive = boolean
export type Size = keyof typeof badgeVariants['size']
export type Color = keyof typeof badgeVariants['color']

type Props = {
  colorState: [Color, React.Dispatch<React.SetStateAction<Color>>]
  sizeState: [Size, React.Dispatch<React.SetStateAction<Size>>]
  interactiveState: [
    Interactive,
    React.Dispatch<React.SetStateAction<Interactive>>
  ]
}

const BadgeVariantSelector: FC<Props> = ({
  colorState,
  sizeState,
  interactiveState,
}) => {
  const items: Items = {
    interactive: {
      kind: 'CHECKBOX',
      state: interactiveState,
    },
    size: {
      kind: 'RADIO_GROUP',
      state: sizeState,
      keys: Object.keys(badgeVariants['size']),
    },
    color: {
      kind: 'RADIO_GROUP_LARGE',
      state: colorState,
      keys: Object.keys(badgeVariants['color']),
    },
  }

  return <>{generateSelectors(items)}</>
}

export default BadgeVariantSelector
