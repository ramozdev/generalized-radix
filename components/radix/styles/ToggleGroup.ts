import { CSS } from 'stitches.config'

const root: CSS = {
  display: 'inline-flex',
  backgroundColor: '$mauve6',
  borderRadius: 4,
  boxShadow: `0 2px 10px $blackA7`,
}

const item: CSS = {
  all: 'unset',
  backgroundColor: '$gray2',
  color: '$mauve11',
  height: 35,
  width: 35,
  display: 'flex',
  fontSize: 15,
  lineHeight: 1,
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 1,
  '&:first-child': {
    marginLeft: 0,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  '&:last-child': { borderTopRightRadius: 4, borderBottomRightRadius: 4 },
  '&:hover': { backgroundColor: '$violet3' },
  '&[data-state=on]': {
    backgroundColor: '$violet5',
    color: '$violet11',
  },
  '&:focus': { position: 'relative', boxShadow: `0 0 0 2px black` },
}

export { item, root }
