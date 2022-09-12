import { CSS } from 'stitches.config'
import { colorVariants } from 'utils/colors'

const root: CSS = {
  // all: 'unset',
  width: 24,
  height: 24,
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  outline: 'none',
  variants: {
    color: colorVariants,
  },
  defaultVariants: {
    color: 'gray',
  },
}

const indicator: CSS = {
  '& svg': {
    width: 20,
    height: 20,
  },
  variants: {
    color: colorVariants,
  },
  defaultVariants: {
    color: 'gray',
  },
}

export { indicator, root }
