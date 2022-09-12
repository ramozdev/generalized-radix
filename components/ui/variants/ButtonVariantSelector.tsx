import { FC } from 'react'
import { buttonVariants } from '../Button'
import { generateSelectors, Items } from '../VariantGenerator'

export type Ghost = boolean
export type Outlined = boolean
export type Size = keyof typeof buttonVariants['size']
export type Color = keyof typeof buttonVariants['color']

type Props = {
  ghost: [Ghost, React.Dispatch<React.SetStateAction<Ghost>>]
  outlined: [Outlined, React.Dispatch<React.SetStateAction<Outlined>>]
  size: [Size, React.Dispatch<React.SetStateAction<Size>>]
  color: [Color, React.Dispatch<React.SetStateAction<Color>>]
}

const ButtonVariantSelector: FC<Props> = ({ ghost, outlined, size, color }) => {
  const items: Items = {
    ghost: {
      kind: 'CHECKBOX',
      state: ghost,
    },
    outlined: {
      kind: 'CHECKBOX',
      state: outlined,
    },
    size: {
      kind: 'RADIO_GROUP',
      state: size,
      keys: Object.keys(buttonVariants['size']),
    },
    color: {
      kind: 'RADIO_GROUP_LARGE',
      state: color,
      keys: Object.keys(buttonVariants['color']),
    },
  }

  return <>{generateSelectors(items)}</>
}

export default ButtonVariantSelector
