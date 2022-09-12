import { styled } from 'stitches.config'
import { coloredButtons } from 'utils/coloredButtons'
import { colors, colorVariants } from 'utils/colors'

export const buttonVariants = {
  size: {
    '1': {
      fontSize: '$small',
      fontWeight: '$small',
      padding: '8px 20px',
    },
    '2': {
      fontSize: '$body',
      fontWeight: '$body',
      padding: '16px 28px',
    },
    '3': {
      fontSize: '$h5',
      fontWeight: '$h5',
      padding: '20px 30px',
    },
  },
  color: colorVariants,
  ghost: {
    true: {},
  },
  outlined: {
    true: {},
  },
}

export const Button = styled(
  'button',
  {
    // all: 'unset',
    alignItems: 'center',
    userSelect: 'none',
    display: 'block',
    flexShrink: 0,
    justifyContent: 'center',
    lineHeight: 1,
    outline: 'none',

    '&:disabled': {
      backgroundColor: '$gray2',
      boxShadow: 'inset 0 0 0 1px $colors$gray7',
      color: '$gray8',
      pointerEvents: 'none',
    },

    variants: buttonVariants,
    defaultVariants: {
      size: '1',
      color: 'gray',
    },
  },
  coloredButtons(colors)
)
