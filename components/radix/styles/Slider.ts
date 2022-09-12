import { CSS } from 'stitches.config'

const root: CSS = {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
  touchAction: 'none',
  width: 200,

  '&[data-orientation="horizontal"]': {
    height: 20,
  },

  '&[data-orientation="vertical"]': {
    flexDirection: 'column',
    width: 20,
    height: 100,
  },
}

const track: CSS = {
  backgroundColor: '$blackA10',
  position: 'relative',
  flexGrow: 1,
  borderRadius: '9999px',

  '&[data-orientation="horizontal"]': { height: 3 },
  '&[data-orientation="vertical"]': { width: 3 },
}

const range: CSS = {
  position: 'absolute',
  backgroundColor: 'white',
  borderRadius: '9999px',
  height: '100%',
}

const thumb: CSS = {
  all: 'unset',
  display: 'block',
  width: 20,
  height: 20,
  backgroundColor: 'white',
  boxShadow: `0 2px 10px $blackA7`,
  borderRadius: 10,
  '&:hover': { backgroundColor: '$violet3' },
  '&:focus': { boxShadow: `0 0 0 5px $blackA8` },
}

export { range, root, thumb, track }
