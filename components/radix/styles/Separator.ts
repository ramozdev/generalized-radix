import { CSS } from 'stitches.config'

const root: CSS = {
  backgroundColor: '$violet6',
  '&[data-orientation=horizontal]': { height: 1, width: '100%' },
  '&[data-orientation=vertical]': { height: '100%', width: 1 },
}

export { root }
