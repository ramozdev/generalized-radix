import { CSS, keyframes } from 'stitches.config'

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

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

const arrow: CSS = {
  fill: '$gray1',
}

const shareContent: CSS = {
  minWidth: 220,
  backgroundColor: '$gray1',
  borderRadius: 6,
  padding: 5,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    animationFillMode: 'forwards',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
}

const content: CSS = shareContent

const subContent: CSS = shareContent

const subTrigger: CSS = {
  '&[data-state="open"]': {
    backgroundColor: '$violet4',
    color: '$violet11',
  },
  ...sharedItem,
}

const rightSlot: CSS = {
  marginLeft: 'auto',
  paddingLeft: 20,
  color: '$mauve11',
  ':focus > &': { color: '$gray1' },
  '[data-disabled] &': { color: '$mauve8' },
}

const iconButton: CSS = {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 35,
  width: 35,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$violet11',
  backgroundColor: '$gray2',
  boxShadow: `0 2px 10px $blackA7`,
  '&:hover': { backgroundColor: '$violet3' },
  '&:focus': { boxShadow: `0 0 0 2px black` },
}

export {
  arrow,
  checkboxItem,
  content,
  iconButton,
  itemIndicator,
  item,
  label,
  radioItem,
  rightSlot,
  separator,
  subContent,
  subTrigger,
}
