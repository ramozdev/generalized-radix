import { styled } from 'stitches.config'

export const Container = styled('div', {
  flexShrink: 0,
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: 0,
  '@bp1': {
    padding: '0px 8px',
  },
  '@bp2': {
    padding: '0px 16px',
  },
  '@media (min-width: 1456px)': {
    padding: 0,
  },

  variants: {
    size: {
      mobile: {
        maxWidth: 600,
      },
      tablet: {
        maxWidth: 905,
      },
      desktop: {
        maxWidth: 1240,
      },
      ultrawide: {
        maxWidth: 1440,
      },
      full: {
        maxWidth: 'none',
      },
    },
  },
  defaultVariants: {
    size: '4',
  },
})
