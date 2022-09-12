import { CSS } from 'stitches.config'

const root: CSS = {
  display: 'flex',
  padding: 10,
  width: '100%',
  minWidth: 'max-content',
  borderRadius: 6,
  backgroundColor: '$gray2',
  boxShadow: `0 2px 10px $blackA7`,
}

const sharedItem: CSS = {
  all: 'unset',
  flex: '0 0 auto',
  color: '$mauve11',
  height: 25,
  padding: '0 5px',
  borderRadius: 4,
  display: 'inline-flex',
  fontSize: 13,
  lineHeight: 1,
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': { backgroundColor: '$violet3', color: '$violet11' },
  '&:focus': { position: 'relative', boxShadow: `0 0 0 2px ${'$violet7'}` },
}

const button: CSS = {
  ...sharedItem,
  paddingLeft: 10,
  paddingRight: 10,
  color: '$gray11',
  backgroundColor: '$violet9,',
  '&:hover': { color: '$gray2', backgroundColor: '$violet10' },
}

const link: CSS = {
  ...sharedItem,
  backgroundColor: 'transparent',
  color: '$mauve11',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover': { backgroundColor: 'transparent', cursor: 'pointer' },
}

const separator: CSS = {
  width: 1,
  backgroundColor: '$mauve6',
  margin: '0 10px',
}

const toggleGroup: CSS = {
  display: 'inline-flex',
  borderRadius: 4,
}

const toggleItem: CSS = {
  ...sharedItem,
  boxShadow: 0,
  backgroundColor: '$gray2',
  marginLeft: 2,
  '&:first-child': { marginLeft: 0 },
  '&[data-state=on]': {
    backgroundColor: '$violet5',
    color: '$violet11',
  },
}

export { button, link, root, separator, toggleGroup, toggleItem }
