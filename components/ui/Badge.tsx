import { styled } from 'stitches.config'
import { coloredBadges } from 'utils/coloredBadges'
import { colors, colorVariants } from 'utils/colors'

export const badgeVariants = {
  size: {
    '1': {
      padding: '1px 4px',
      fontSize: '0.9rem',
    },
    '2': {
      padding: '4px 8px',
    },
  },
  color: colorVariants,
  interactive: {
    true: {},
  },
}

export const Badge = styled(
  'span',
  {
    alignItems: 'center',
    appearance: 'none',
    borderWidth: 0,
    boxSizing: 'border-box',
    display: 'inline-flex',
    flexShrink: 0,
    fontFamily: 'inherit',
    justifyContent: 'center',
    outline: 'none',
    padding: 0,
    textDecoration: 'none',
    userSelect: 'none',
    verticalAlign: 'middle',
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
    '&:disabled': {
      backgroundColor: '$gray3',
      pointerEvents: 'none',
      color: '$gray8',
    },
    '&::before': {
      boxSizing: 'border-box',
      content: '""',
    },
    '&::after': {
      boxSizing: 'border-box',
      content: '""',
    },

    // Custom
    backgroundColor: '$gray3',
    borderRadius: 4,
    color: '$gray11',
    whiteSpace: 'nowrap',
    fontVariantNumeric: 'tabular-nums',

    variants: badgeVariants,
    defaultVariants: {
      size: '1',
      color: 'gray',
    },
  },
  coloredBadges(colors)
)
