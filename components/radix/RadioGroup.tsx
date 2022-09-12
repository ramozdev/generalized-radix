import {
  ComponentPropsWithoutRef,
  ElementRef,
  FC,
  forwardRef,
  ReactNode,
} from 'react'
import { CSSProps, styled } from 'stitches.config'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { colors } from 'utils/colors'
import { coloredRadioIndicators, coloredRadioItems } from 'utils/coloredRadios'
import { Flex } from 'components/ui'
import { Colors } from 'context/types'
import * as styles from './styles/RadioGroup'
import { Label, LabelProps } from './Label'

const RadioGroupStyledRadio = styled(
  RadioGroupPrimitive.Item,
  styles.item,
  coloredRadioItems(colors)
)

const RadioGroupStyledIndicator = styled(
  RadioGroupPrimitive.Indicator,
  styles.indicator,
  coloredRadioIndicators(colors)
)

const RadioGroup = styled(RadioGroupPrimitive.Root)
type RadioGroupProps = RadioGroupPrimitive.RadioGroupProps & CSSProps

type RadioProps = RadioGroupPrimitive.RadioGroupItemProps & CSSProps

const Radio = forwardRef<
  ElementRef<typeof RadioGroupStyledRadio>,
  ComponentPropsWithoutRef<typeof RadioGroupStyledRadio>
>(({ color, ...props }, forwardedRef) => (
  <RadioGroupStyledRadio color={color} {...props} ref={forwardedRef}>
    <RadioGroupStyledIndicator color={color} />
  </RadioGroupStyledRadio>
))

type Props = {
  labelProps?: LabelProps
  radioProps: RadioProps
} & CSSProps

const RadioWithLabel: FC<Props> = ({
  radioProps,
  labelProps,
  children,
  ...props
}) => (
  <Flex {...props} css={{ alignItems: 'center', ...props?.css }}>
    <Radio {...radioProps} />
    <Label
      css={{ paddingLeft: 12, ...labelProps?.css }}
      htmlFor={radioProps?.id}
      {...labelProps}
    >
      {children}
    </Label>
  </Flex>
)

type GeneralizedRadioGroupProps = {
  items: {
    children?: ReactNode
    props: RadioProps & { color?: Colors }
  }[]
} & RadioGroupProps

const GeneralizedRadioGroup: FC<GeneralizedRadioGroupProps> = ({
  items,
  ...props
}) => (
  <RadioGroup {...props}>
    {items.map(({ children, props }) => {
      return (
        <RadioWithLabel
          key={props.value}
          radioProps={{ id: props.value, ...props }}
        >
          {children || props.value}
        </RadioWithLabel>
      )
    })}
  </RadioGroup>
)

export {
  RadioGroupStyledRadio,
  RadioGroupStyledIndicator,
  RadioGroup,
  Radio,
  RadioWithLabel,
  GeneralizedRadioGroup,
}

export type { RadioGroupProps, RadioProps, GeneralizedRadioGroupProps }
