import { CSSProps, styled } from 'stitches.config'
import { DotFilledIcon, CheckIcon } from '@radix-ui/react-icons'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { FC, ReactNode } from 'react'
import { v4 as uuidv4 } from 'uuid'
import * as styles from './styles/DropdownMenu'
import { StyledComponent } from '@stitches/react/types/styled-component'

const DropdownMenuItem = styled(DropdownMenuPrimitive.Item, styles.item)
type DropdownMenuItemProps = DropdownMenuPrimitive.DropdownMenuItemProps &
  CSSProps

const DropdownMenuCheckboxItem = styled(
  DropdownMenuPrimitive.CheckboxItem,
  styles.checkboxItem
)
type DropdownMenuCheckboxItemProps =
  DropdownMenuPrimitive.DropdownMenuCheckboxItemProps & CSSProps

const DropdownMenuRadioItem = styled(
  DropdownMenuPrimitive.RadioItem,
  styles.radioItem
)
type DropdownMenuRadioItemProps =
  DropdownMenuPrimitive.DropdownMenuRadioItemProps & CSSProps

const DropdownMenuLabel = styled(DropdownMenuPrimitive.Label, styles.label)
type DropdownMenuLabelProps = DropdownMenuPrimitive.DropdownMenuLabelProps &
  CSSProps

const DropdownMenuSeparator = styled(
  DropdownMenuPrimitive.Separator,
  styles.separator
)
type DropdownMenuSeparatorProps =
  DropdownMenuPrimitive.DropdownMenuSeparatorProps & CSSProps

const DropdownMenuItemIndicator = styled(
  DropdownMenuPrimitive.ItemIndicator,
  styles.itemIndicator
)
type DropdownMenuItemIndicatorProps =
  DropdownMenuPrimitive.DropdownMenuItemIndicatorProps & CSSProps

const DropdownMenuArrow = styled(DropdownMenuPrimitive.Arrow, styles.arrow)
type DropdownMenuArrowProps = DropdownMenuPrimitive.DropdownMenuArrowProps &
  CSSProps

const DropdownMenuStyledContent = styled(
  DropdownMenuPrimitive.Content,
  styles.content
)
type DropdownMenuContentProps = {
  arrowProps?: DropdownMenuArrowProps
} & DropdownMenuPrimitive.DropdownMenuContentProps &
  CSSProps

const DropdownMenuContent: FC<DropdownMenuContentProps> = ({
  children,
  arrowProps,
  ...props
}) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuStyledContent {...props}>
      {children}
      <DropdownMenuArrow {...arrowProps} />
    </DropdownMenuStyledContent>
  </DropdownMenuPrimitive.Portal>
)

const StyledSubContent = styled(
  DropdownMenuPrimitive.SubContent,
  styles.subContent
)
type DropdownMenuSubContentProps =
  DropdownMenuPrimitive.DropdownMenuSubContentProps & CSSProps

const DropdownMenuSubContent: FC<DropdownMenuSubContentProps> = (props) => (
  <DropdownMenuPrimitive.Portal>
    <StyledSubContent {...props} />
  </DropdownMenuPrimitive.Portal>
)

const DropdownMenuSubTrigger = styled(
  DropdownMenuPrimitive.SubTrigger,
  styles.subTrigger
)
type DropdownMenuSubTriggerProps =
  DropdownMenuPrimitive.DropdownMenuSubTriggerProps & CSSProps

const DropdownMenu = DropdownMenuPrimitive.Root
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRightSlot = styled('div', styles.rightSlot)
type DropdownMenuRightSlotProps = StyledComponent<'div'> & CSSProps

const DropdownMenuIconButton = styled('button', styles.iconButton)
type DropdownMenuIconButtonProps = StyledComponent<'button'> & CSSProps

type GeneralizedDropdownMenuProps = {
  trigger: {
    children: ReactNode
    iconButtonProps?: DropdownMenuIconButtonProps
    props?: DropdownMenuPrimitive.DropdownMenuTriggerProps
  }
  arrowProps?: DropdownMenuArrowProps
  contentProps?: DropdownMenuContentProps
  items: (
    | {
        kind: 'ITEM'
        label: ReactNode
        props?: DropdownMenuItemProps
        rightSlot?: {
          children: ReactNode
          props?: DropdownMenuRightSlotProps
        }
      }
    | {
        kind: 'SEPARATOR'
        props?: DropdownMenuSeparatorProps
      }
    | {
        kind: 'CHECKBOX'
        label: ReactNode
        itemIndicator?: {
          children?: ReactNode
          props?: DropdownMenuItemIndicatorProps
        }
        props?: DropdownMenuCheckboxItemProps
        rightSlot?: {
          children: ReactNode
          props?: DropdownMenuRightSlotProps
        }
      }
    | {
        kind: 'LABEL'
        label: string
        props?: DropdownMenuLabelProps
      }
    | {
        props?: DropdownMenuPrimitive.DropdownMenuRadioGroupProps
        items: {
          label: ReactNode
          props: DropdownMenuRadioItemProps
          itemIndicator?: {
            children?: ReactNode
            props?: DropdownMenuItemIndicatorProps
          }
        }[]
        kind: 'RADIO_GROUP'
      }
    | {
        kind: 'SUB_MENU'
        props?: DropdownMenuPrimitive.DropdownMenuSubProps
        subContent?: DropdownMenuSubContentProps
        trigger: {
          label: ReactNode
          rightSlot?: {
            children: ReactNode
            props?: DropdownMenuRightSlotProps
          }
          props?: DropdownMenuSubTriggerProps
        }
        items: GeneralizedDropdownMenuProps['items']
      }
  )[]
} & DropdownMenuPrimitive.DropdownMenuProps

function generateItems(items: GeneralizedDropdownMenuProps['items']) {
  return items.map((item) => {
    const id = uuidv4()
    switch (item.kind) {
      case 'CHECKBOX':
        return (
          <DropdownMenuCheckboxItem key={id} {...item.props}>
            <DropdownMenuItemIndicator {...item?.itemIndicator?.props}>
              {item?.itemIndicator?.children || <CheckIcon />}
            </DropdownMenuItemIndicator>
            {item.label}
            {item.rightSlot && (
              <DropdownMenuRightSlot {...item.rightSlot.props}>
                {item.rightSlot.children}
              </DropdownMenuRightSlot>
            )}
          </DropdownMenuCheckboxItem>
        )
      case 'ITEM':
        return (
          <DropdownMenuItem key={id} {...item.props}>
            {item.label}
            {item.rightSlot && (
              <DropdownMenuRightSlot {...item.rightSlot.props}>
                {item.rightSlot.children}
              </DropdownMenuRightSlot>
            )}
          </DropdownMenuItem>
        )
      case 'LABEL':
        return (
          <DropdownMenuLabel key={id} {...item.props}>
            {item.label}
          </DropdownMenuLabel>
        )
      case 'RADIO_GROUP':
        return (
          <DropdownMenuRadioGroup key={id} {...item.props}>
            {item.items.map(({ label, props, itemIndicator }) => (
              <DropdownMenuRadioItem key={uuidv4()} {...props}>
                <DropdownMenuItemIndicator {...itemIndicator?.props}>
                  {itemIndicator?.children || <DotFilledIcon />}
                </DropdownMenuItemIndicator>
                {label}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        )
      case 'SEPARATOR':
        return <DropdownMenuSeparator key={id} {...item.props} />

      case 'SUB_MENU':
        return (
          <DropdownMenuSub key={id} {...item.props}>
            <DropdownMenuSubTrigger {...item.trigger.props}>
              {item.trigger.label}
              {item.trigger.rightSlot && (
                <DropdownMenuRightSlot {...item.trigger.rightSlot.props}>
                  {item.trigger.rightSlot.children}
                </DropdownMenuRightSlot>
              )}
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent {...item?.subContent}>
              {generateItems(item.items)}
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        )

      default:
        break
    }
  })
}

const GeneralizedDropdownMenu: FC<GeneralizedDropdownMenuProps> = ({
  trigger,
  contentProps,
  arrowProps,
  items,
  ...props
}) => (
  <DropdownMenu {...props}>
    <DropdownMenuTrigger {...trigger.props}>
      <DropdownMenuIconButton {...trigger.iconButtonProps}>
        {trigger.children}
      </DropdownMenuIconButton>
    </DropdownMenuTrigger>

    <DropdownMenuContent {...contentProps}>
      {generateItems(items)}
      <DropdownMenuArrow {...arrowProps} />
    </DropdownMenuContent>
  </DropdownMenu>
)

export {
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItemIndicator,
  DropdownMenuArrow,
  DropdownMenuStyledContent,
  DropdownMenuContent,
  StyledSubContent,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenu,
  DropdownMenuRadioGroup,
  DropdownMenuSub,
  DropdownMenuRightSlot,
  DropdownMenuIconButton,
  GeneralizedDropdownMenu,
}

export type {
  DropdownMenuItemProps,
  DropdownMenuCheckboxItemProps,
  DropdownMenuRadioItemProps,
  DropdownMenuLabelProps,
  DropdownMenuSeparatorProps,
  DropdownMenuItemIndicatorProps,
  DropdownMenuArrowProps,
  DropdownMenuContentProps,
  DropdownMenuSubContentProps,
  DropdownMenuSubTriggerProps,
  DropdownMenuRightSlotProps,
  DropdownMenuIconButtonProps,
  GeneralizedDropdownMenuProps,
}
