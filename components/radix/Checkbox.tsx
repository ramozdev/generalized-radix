import { CSSProps, styled } from 'stitches.config'
import { CheckIcon } from '@radix-ui/react-icons'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import {
  coloredCheckboxes,
  coloredCheckboxIndicators,
} from 'utils/coloredCheckboxes'
import { colors } from 'utils/colors'
import { ElementRef, forwardRef, ReactNode } from 'react'
import * as styles from './styles/Checkbox'

const StyledCheckbox = styled(
  CheckboxPrimitive.Root,
  styles.root,
  coloredCheckboxes(colors)
)
type StyledCheckboxProps = CheckboxPrimitive.CheckboxProps & CSSProps

const CheckboxIndicator = styled(
  CheckboxPrimitive.Indicator,
  styles.indicator,
  coloredCheckboxIndicators(colors)
)
type CheckboxIndicatorProps = CheckboxPrimitive.CheckboxIndicatorProps &
  CSSProps

type CheckboxProps = {
  indicator?: { children?: ReactNode; props?: CheckboxIndicatorProps }
} & StyledCheckboxProps
const Checkbox = forwardRef<ElementRef<typeof StyledCheckbox>, CheckboxProps>(
  ({ indicator, color, ...props }, forwardedRef) => (
    <StyledCheckbox color={color} {...props} ref={forwardedRef}>
      <CheckboxIndicator color={color} {...indicator?.props}>
        {indicator?.children || <CheckIcon />}
      </CheckboxIndicator>
    </StyledCheckbox>
  )
)

export { StyledCheckbox, CheckboxIndicator, Checkbox }

export type { StyledCheckboxProps, CheckboxIndicatorProps, CheckboxProps }
