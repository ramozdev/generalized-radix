import { CSS } from 'stitches.config'

const root: CSS = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: 45,
  height: 45,
  borderRadius: '100%',
  backgroundColor: '$blackA3',
}

const image: CSS = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
}

const fallback: CSS = {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray2',
  color: '$violet11',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
}

export { fallback, image, root }
