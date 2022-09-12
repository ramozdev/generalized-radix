import { CSS } from 'stitches.config'

const root: CSS = {
  all: 'unset',
  width: 42,
  height: 25,
  backgroundColor: '$blackA9',
  borderRadius: '9999px',
  position: 'relative',
  boxShadow: `0 2px 10px $blackA7`,
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&:focus': { boxShadow: `0 0 0 2px black` },
  '&[data-state="checked"]': { backgroundColor: 'black' },
}

const thumb: CSS = {
  display: 'block',
  width: 21,
  height: 21,
  backgroundColor: 'white',
  borderRadius: '9999px',
  boxShadow: `0 2px 2px $blackA7`,
  transition: 'transform 100ms',
  transform: 'translateX(2px)',
  willChange: 'transform',
  '&[data-state="checked"]': { transform: 'translateX(19px)' },
}

export { root, thumb }
