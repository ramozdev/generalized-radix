import { CSS } from 'stitches.config'

const root: CSS = {
  all: 'unset',
  backgroundColor: '$gray2',
  color: '$mauve11',
  h: 35,
  w: 35,
  borderRadius: 4,
  display: 'flex',
  fontSize: 15,
  lineHeight: 1,
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: `0 2px 10px $blackA7`,
  '&:hover': { backgroundColor: '$violet3' },
  '&[data-state=on]': {
    backgroundColor: '$violet6',
    color: '$violet12',
  },
  '&:focus': { boxShadow: `0 0 0 2px black` },
}

export { root }
