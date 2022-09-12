import { CSS, keyframes } from 'stitches.config'

const enterFromRight = keyframes({
  from: { transform: 'translateX(200px)', opacity: 0 },
  to: { transform: 'translateX(0)', opacity: 1 },
})

const enterFromLeft = keyframes({
  from: { transform: 'translateX(-200px)', opacity: 0 },
  to: { transform: 'translateX(0)', opacity: 1 },
})

const exitToRight = keyframes({
  from: { transform: 'translateX(0)', opacity: 1 },
  to: { transform: 'translateX(200px)', opacity: 0 },
})

const exitToLeft = keyframes({
  from: { transform: 'translateX(0)', opacity: 1 },
  to: { transform: 'translateX(-200px)', opacity: 0 },
})

const scaleIn = keyframes({
  from: { transform: 'rotateX(-30deg) scale(0.9)', opacity: 0 },
  to: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
})

const scaleOut = keyframes({
  from: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
  to: { transform: 'rotateX(-10deg) scale(0.95)', opacity: 0 },
})

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
})

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
})

const root: CSS = {
  position: 'fixed',
  display: 'flex',
  justifyContent: 'center',
  width: '100vw',
  zIndex: 1,
}

const list: CSS = {
  all: 'unset',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '$gray2',
  padding: 4,
  borderRadius: 6,
  listStyle: 'none',
  boxShadow: `0 2px 10px $blackA7`,
}

const sharedItem: CSS = {
  padding: '8px 12px',
  outline: 'none',
  userSelect: 'none',
  fontWeight: 500,
  lineHeight: 1,
  borderRadius: 4,
  fontSize: 15,
  color: '$violet11',
  '&:focus': { position: 'relative', boxShadow: `0 0 0 2px ${'$violet7'}` },
  '&:hover': { backgroundColor: '$violet3' },
}

const trigger: CSS = {
  all: 'unset',
  ...sharedItem,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 2,
}

const caretDown: CSS = {
  position: 'relative',
  color: '$violet10',
  top: 1,
  '[data-state=open] &': { transform: 'rotate(-180deg)' },
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'transform 250ms ease',
  },
}

const link: CSS = {
  ...sharedItem,
  display: 'block',
  textDecoration: 'none',
  fontSize: 15,
  lineHeight: 1,
}

const content: CSS = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  '@media only screen and (min-width: 600px)': { width: 'auto' },
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '250ms',
    animationTimingFunction: 'ease',
    '&[data-motion="from-start"]': { animationName: enterFromLeft },
    '&[data-motion="from-end"]': { animationName: enterFromRight },
    '&[data-motion="to-start"]': { animationName: exitToLeft },
    '&[data-motion="to-end"]': { animationName: exitToRight },
  },
}

const indicator: CSS = {
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  height: 10,
  top: '100%',
  overflow: 'hidden',
  zIndex: 1,

  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'width, transform 250ms ease',
    '&[data-state="visible"]': { animation: `${fadeIn} 200ms ease` },
    '&[data-state="hidden"]': { animation: `${fadeOut} 200ms ease` },
  },
}

const arrow: CSS = {
  position: 'relative',
  top: '70%',
  backgroundColor: '$gray2',
  width: 10,
  height: 10,
  transform: 'rotate(45deg)',
  borderTopLeftRadius: 2,
}

const viewport: CSS = {
  position: 'relative',
  transformOrigin: 'top center',
  marginTop: 10,
  width: '100%',
  backgroundColor: '$gray2',
  borderRadius: 6,
  overflow: 'hidden',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  height: 'var(--radix-navigation-menu-viewport-height)',

  '@media only screen and (min-width: 600px)': {
    width: 'var(--radix-navigation-menu-viewport-width)',
  },
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'width, height, 300ms ease',
    '&[data-state="open"]': { animation: `${scaleIn} 200ms ease` },
    '&[data-state="closed"]': { animation: `${scaleOut} 200ms ease` },
  },
}

export {
  arrow,
  caretDown,
  content,
  indicator,
  link,
  list,
  root,
  trigger,
  viewport,
}
