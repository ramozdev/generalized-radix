import React, { FC } from 'react'
import { cardVariants } from '../Card'
import { generateSelectors, Items } from '../VariantGenerator'

export type Outlined = boolean
export type Variant = keyof typeof cardVariants['variant']
export type Color = keyof typeof cardVariants['color']

type Props = {
  color: [Color, React.Dispatch<React.SetStateAction<Color>>]
  outlined: [Outlined, React.Dispatch<React.SetStateAction<Outlined>>]
  variant: [Variant, React.Dispatch<React.SetStateAction<Variant>>]
}

const CardVariantSelector: FC<Props> = ({ color, outlined, variant }) => {
  const items: Items = {
    outlined: {
      kind: 'CHECKBOX',
      state: outlined,
    },
    variant: {
      kind: 'RADIO_GROUP',
      state: variant,
      keys: Object.keys(cardVariants['variant']),
    },
    color: {
      kind: 'RADIO_GROUP_LARGE',
      state: color,
      keys: Object.keys(cardVariants['color']),
    },
  }

  return <>{generateSelectors(items)}</>
}

export default CardVariantSelector
