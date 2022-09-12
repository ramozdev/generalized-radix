import { CSS } from 'stitches.config'

const root: CSS = {
  display: 'block',
  fontSize: 15,
  fontWeight: 500,
  color: '$gray11',
  userSelect: 'none',

  variants: {
    inline: {
      true: {
        marginBottom: 0,
        display: 'inline',
      },
    },
  },
}

export { root }
