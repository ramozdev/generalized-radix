import { CSS, keyframes } from 'stitches.config'

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
})

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
})

const root: CSS = {
  borderRadius: 6,
  width: 300,
  backgroundColor: '$mauve6',
  boxShadow: `0 2px 10px $blackA4`,
}

const item: CSS = {
  overflow: 'hidden',
  marginTop: 1,

  '&:first-child': {
    marginTop: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },

  '&:last-child': {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },

  '&:focus-within': {
    position: 'relative',
    zIndex: 1,
    boxShadow: `0 0 0 2px`,
    shadowColor: '$mauve12',
  },
}

const header: CSS = {
  all: 'unset',
  display: 'flex',
}

const trigger: CSS = {
  all: 'unset',
  fontFamily: 'inherit',
  backgroundColor: 'transparent',
  padding: '0 20px',
  height: 45,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: 15,
  lineHeight: 1,
  color: '$violet11',
  boxShadow: `0 1px 0`,
  shadowColor: '$mauve6',
  '&[data-state="closed"]': { backgroundColor: '$gray1' },
  '&[data-state="open"]': { backgroundColor: '$gray1' },
  '&:hover': { backgroundColor: '$mauve2' },
}

const content: CSS = {
  overflow: 'hidden',
  fontSize: 15,
  color: '$mauve11',
  backgroundColor: '$mauve2',

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`,
  },
}

const chevron: CSS = {
  color: '$violet10',
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  '[data-state=open] &': { transform: 'rotate(180deg)' },
}

const contentText: CSS = {
  padding: '15px 20px',
}

export { chevron, content, contentText, header, item, root, trigger }
