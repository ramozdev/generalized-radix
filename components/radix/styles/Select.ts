import { CSS } from 'stitches.config'

const trigger: CSS = {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 15px',
  fontSize: 13,
  lineHeight: 1,
  height: 35,
  gap: 5,
  backgroundColor: '$gray1',
  color: '$violet11',
  boxShadow: `0 2px 10px $blackA7`,
  '&:hover': { backgroundColor: '$mauve3' },
  '&:focus': { boxShadow: `0 0 0 2px black` },
}

const content: CSS = {
  overflow: 'hidden',
  backgroundColor: '$gray1',
  borderRadius: 6,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
}

const viewport: CSS = {
  padding: 5,
}

const item: CSS = {
  all: 'unset',
  fontSize: 13,
  lineHeight: 1,
  color: '$violet11',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '0 35px 0 25px',
  position: 'relative',
  userSelect: 'none',

  '&[data-disabled]': {
    color: '$mauve8',
    pointerEvents: 'none',
  },

  '&:focus': {
    backgroundColor: '$violet9',
    color: '$violet1',
  },
}

const label: CSS = {
  padding: '0 25px',
  fontSize: 12,
  lineHeight: '25px',
  color: '$mauve11',
}

const separator: CSS = {
  height: 1,
  backgroundColor: '$violet6',
  margin: 5,
}

const itemIndicator: CSS = {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const scrollButton: CSS = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 25,
  backgroundColor: '$gray1',
  color: '$violet11',
  cursor: 'default',
}

const StyledScrollUpButton: CSS = scrollButton
const StyledScrollDownButton: CSS = scrollButton

export {
  content,
  itemIndicator,
  item,
  label,
  separator,
  StyledScrollDownButton,
  StyledScrollUpButton,
  trigger,
  viewport,
}
