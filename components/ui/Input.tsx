import { styled } from 'stitches.config'
import { coloredInputs } from 'utils/coloredInputs'
import { colors, colorVariants } from 'utils/colors'

export const Input = styled(
  'input',
  {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    padding: '0 10px',
    height: 35,
    fontSize: 15,
    lineHeight: 1,
    outline: 'none',
    width: '100%',

    variants: {
      color: colorVariants,
    },
    defaultVariants: {
      color: 'gray',
    },
  },
  coloredInputs(colors)
)
