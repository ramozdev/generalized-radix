import { styled } from 'stitches.config'

export const NavBar = styled('div', {
  boxSizing: 'border-box',
  zIndex: '1',

  variants: {
    size: {
      1: {
        py: '$1',
      },
      2: {
        py: '$2',
      },
      3: {
        py: '$3',
      },
    },
    sticky: {
      true: {
        position: 'sticky',
        width: '100%',
        top: 0,
        left: 0,
      },
    },
    glass: {
      true: {
        backdropFilter: 'blur(12px) saturate(160%)',
      },
    },
    border: {
      true: {
        borderBottom: '1px solid',
      },
    },
  },
  defaultVariants: {
    size: '1',
  },
})
