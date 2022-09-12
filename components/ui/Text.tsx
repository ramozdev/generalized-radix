import { styled } from 'stitches.config'

export const Text = styled('div', {
  color: '$gray12',

  variants: {
    kind: {
      h1: {
        fontWeight: '$h1',
        fontSize: '$h1',
        lineHeight: '$h1',
      },
      h2: {
        fontWeight: '$h2',
        fontSize: '$h2',
        lineHeight: '$h2',
      },
      h3: {
        fontWeight: '$h3',
        fontSize: '$h3',
        lineHeight: '$h3',
      },
      h4: {
        fontWeight: '$h4',
        fontSize: '$h4',
        lineHeight: '$h4',
      },
      h5: {
        fontWeight: '$h5',
        fontSize: '$h5',
        lineHeight: '$h5',
      },
      h6: {
        fontWeight: '$h6',
        fontSize: '$h6',
        lineHeight: '$h6',
      },
      body: {
        fontWeight: '$body',
        fontSize: '$body',
        lineHeight: '$body',
      },
      small: {
        fontWeight: '$small',
        fontSize: '$small',
        lineHeight: '$small',
      },
      tiny: {
        fontWeight: '$tiny',
        fontSize: '$tiny',
        lineHeight: '$tiny',
      },
    },
  },

  defaultVariants: {
    kind: 'body',
  },
})
