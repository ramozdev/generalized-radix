import { CSS } from 'stitches.config'

const sharedContent: CSS = {
  minWidth: 220,
  backgroundColor: '$gray1',
  borderRadius: 6,
  overflow: 'hidden',
  padding: 5,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
}

const content: CSS = sharedContent
const subContent: CSS = sharedContent

const sharedItem: CSS = {
  all: 'unset',
  fontSize: 13,
  lineHeight: 1,
  color: '$violet11',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '0 5px',
  position: 'relative',
  paddingLeft: 25,
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

const item: CSS = sharedItem
const checkboxItem: CSS = sharedItem
const radioItem: CSS = sharedItem

const subTrigger: CSS = {
  '&[data-state="open"]': {
    backgroundColor: '$violet4',
    color: '$violet11',
  },
  ...sharedItem,
}

const label: CSS = {
  paddingLeft: 25,
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

const rightSlot: CSS = {
  marginLeft: 'auto',
  paddingLeft: 20,
  color: '$mauve11',
  ':focus > &': { color: '$gray1' },
  '[data-disabled] &': { color: '$mauve8' },
}

export {
  checkboxItem,
  content,
  itemIndicator,
  item,
  label,
  radioItem,
  rightSlot,
  separator,
  subContent,
  subTrigger,
}
