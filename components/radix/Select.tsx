import { CSSProps, styled } from 'stitches.config'
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons'
import * as SelectPrimitive from '@radix-ui/react-select'
import { FC, Fragment, ReactNode } from 'react'
import { v4 as uuidv4 } from 'uuid'
import * as styles from './styles/Select'

const SelectTrigger = styled(SelectPrimitive.SelectTrigger, styles.trigger)
type SelectTriggerProps = SelectPrimitive.SelectTriggerProps & CSSProps

const SelectContent = styled(SelectPrimitive.Content, styles.content)
type SelectContentProps = SelectPrimitive.SelectContentProps & CSSProps

const SelectViewport = styled(SelectPrimitive.Viewport, styles.viewport)
type SelectViewportProps = SelectPrimitive.SelectViewportProps & CSSProps

const SelectItem = styled(SelectPrimitive.Item, styles.item)
type SelectItemProps = SelectPrimitive.SelectItemProps & CSSProps

const SelectLabel = styled(SelectPrimitive.Label, styles.label)
type SelectLabelProps = SelectPrimitive.SelectLabelProps & CSSProps

const SelectSeparator = styled(SelectPrimitive.Separator, styles.separator)
type SelectSeparatorProps = SelectPrimitive.SelectSeparatorProps & CSSProps

const SelectItemIndicator = styled(
  SelectPrimitive.ItemIndicator,
  styles.itemIndicator
)
type SelectItemIndicatorProps = SelectPrimitive.SelectItemIndicatorProps &
  CSSProps

const SelectScrollUpButton = styled(
  SelectPrimitive.ScrollUpButton,
  styles.StyledScrollUpButton
)
type SelectScrollUpButtonProps = SelectPrimitive.SelectScrollUpButtonProps &
  CSSProps

const SelectScrollDownButton = styled(
  SelectPrimitive.ScrollDownButton,
  styles.StyledScrollDownButton
)
type SelectScrollDownButtonProps = SelectPrimitive.SelectScrollDownButtonProps &
  CSSProps

const Select = SelectPrimitive.Root
const SelectValue = SelectPrimitive.Value
const SelectIcon = SelectPrimitive.Icon
const SelectGroup = SelectPrimitive.Group
const SelectItemText = SelectPrimitive.ItemText

type GeneralizedSelectProps = {
  selectValueProps?: SelectPrimitive.SelectValueProps
  disableSeparator?: boolean
  triggerProps?: SelectTriggerProps
  contentProps?: SelectContentProps
  viewportProps?: SelectViewportProps
  separatorProps?: SelectSeparatorProps
  scrollUpButtom?: {
    children?: ReactNode
    props?: SelectScrollUpButtonProps
  }
  scrollDownButtom?: {
    children?: ReactNode
    props?: SelectScrollDownButtonProps
  }
  items: {
    label?: { children?: ReactNode; props?: SelectLabelProps }
    items: {
      label?: ReactNode
      props: SelectItemProps
      itemIndicator?: { children?: ReactNode; props?: SelectItemIndicatorProps }
    }[]
  }[]
} & SelectPrimitive.SelectProps

const GeneralizedSelect: FC<GeneralizedSelectProps> = ({
  selectValueProps,
  triggerProps,
  contentProps,
  viewportProps,
  separatorProps,
  disableSeparator,
  scrollUpButtom,
  scrollDownButtom,
  items,
  ...props
}) => (
  <Select {...props}>
    <SelectTrigger {...triggerProps}>
      <SelectValue {...selectValueProps} />
      <SelectIcon>
        <ChevronDownIcon />
      </SelectIcon>
    </SelectTrigger>
    <SelectContent {...contentProps}>
      <SelectScrollUpButton {...scrollUpButtom?.props}>
        {scrollUpButtom?.children || <ChevronUpIcon />}
      </SelectScrollUpButton>
      <SelectViewport {...viewportProps}>
        {items.map(({ label, items }, index, arr) => (
          <Fragment key={uuidv4()}>
            <SelectGroup>
              {label && (
                <SelectLabel {...label.props}>{label.children}</SelectLabel>
              )}
              {items.map(({ props, label, itemIndicator }) => (
                <SelectItem key={uuidv4()} {...props}>
                  <SelectItemText>{label || props.value}</SelectItemText>
                  <SelectItemIndicator {...itemIndicator?.props}>
                    {itemIndicator?.children || <CheckIcon />}
                  </SelectItemIndicator>
                </SelectItem>
              ))}
            </SelectGroup>
            {!disableSeparator && index !== arr.length - 1 && (
              <SelectSeparator {...separatorProps} />
            )}
          </Fragment>
        ))}
      </SelectViewport>
      <SelectScrollDownButton {...scrollDownButtom?.props}>
        {scrollDownButtom?.children || <ChevronDownIcon />}
      </SelectScrollDownButton>
    </SelectContent>
  </Select>
)

export {
  SelectTrigger,
  SelectContent,
  SelectViewport,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectItemIndicator,
  SelectScrollUpButton,
  SelectScrollDownButton,
  Select,
  SelectValue,
  SelectIcon,
  SelectGroup,
  SelectItemText,
  GeneralizedSelect,
}

export type {
  SelectTriggerProps,
  SelectContentProps,
  SelectViewportProps,
  SelectItemProps,
  SelectLabelProps,
  SelectSeparatorProps,
  SelectItemIndicatorProps,
  SelectScrollUpButtonProps,
  SelectScrollDownButtonProps,
  GeneralizedSelectProps,
}
