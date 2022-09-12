import { CSS } from 'stitches.config'
import { colorVariants } from 'utils/colors'

const item: CSS = {
  all: 'unset',
  w: 25,
  h: 25,
  borderRadius: '100%',
  variants: {
    color: colorVariants,
  },
  defaultVariants: {
    color: 'gray',
  },
}

const indicator: CSS = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  position: 'relative',
  '&::after': {
    content: '""',
    display: 'block',
    width: 11,
    height: 11,
    borderRadius: '50%',
  },
  variants: {
    color: colorVariants,
  },
  defaultVariants: {
    color: 'gray',
  },
}

export { item, indicator }
