import { CSS } from 'stitches.config'

const root: CSS = {
  position: 'relative',
  overflow: 'hidden',
  background: '$blackA9',
  borderRadius: '99999px',
  width: 300,
  height: 25,
}

const indicator: CSS = {
  backgroundColor: '$gray12',
  width: '100%',
  height: '100%',
  transition: 'transform 660ms cubic-bezier(0.65, 0, 0.35, 1)',
}

export { indicator, root }
