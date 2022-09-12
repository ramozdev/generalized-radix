import { StyledComponent } from '@stitches/react/types/styled-component'
import { CSS, styled } from 'stitches.config'

export const Flex = styled('div', {
  boxSizing: 'border-box',
  display: 'flex',
})

export type FlexProps = StyledComponent & CSS
