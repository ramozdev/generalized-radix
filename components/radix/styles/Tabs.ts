import { CSS } from 'stitches.config'

const root: CSS = {
  display: 'flex',
  flexDirection: 'column',
  width: 300,
  boxShadow: `0 2px 10px $blackA4`,
}

const list: CSS = {
  flexShrink: 0,
  display: 'flex',
  borderBottom: `1px solid`,
  borderColor: '$mauve6',
}

const trigger: CSS = {
  all: 'unset',
  fontFamily: 'inherit',
  backgroundColor: '$gray1',
  padding: '0 20px',
  height: 45,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 15,
  lineHeight: 1,
  color: '$mauve11',
  userSelect: 'none',
  '&:first-child': { borderTopLeftRadius: 6 },
  '&:last-child': { borderTopRightRadius: 6 },
  '&:hover': { color: '$violet11' },
  '&[data-state="active"]': {
    color: '$violet11',
    boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
  },
  '&:focus': { position: 'relative', boxShadow: `0 0 0 2px black` },
}

const content: CSS = {
  flexGrow: 1,
  padding: 20,
  backgroundColor: '$gray1',
  borderBottomLeftRadius: 6,
  borderBottomRightRadius: 6,
  outline: 'none',
  '&:focus': { boxShadow: `0 0 0 2px black` },
}

export { content, list, root, trigger }
