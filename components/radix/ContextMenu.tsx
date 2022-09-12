import { FC, ReactNode } from 'react'
import { CSSProps, styled } from 'stitches.config'
import { DotFilledIcon, CheckIcon } from '@radix-ui/react-icons'
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'
import { v4 as uuidv4 } from 'uuid'
import * as styles from './styles/ContextMenu'
import { StyledComponent } from '@stitches/react/types/styled-component'

const StyledContent = styled(ContextMenuPrimitive.Content, styles.content)
type ContextMenuContentProps = ContextMenuPrimitive.ContextMenuContentProps &
  CSSProps

const ContextMenuContent: FC<ContextMenuContentProps> = (props) => (
  <ContextMenuPrimitive.Portal>
    <StyledContent {...props} />
  </ContextMenuPrimitive.Portal>
)

const StyledSubContent = styled(
  ContextMenuPrimitive.SubContent,
  styles.subContent
)
type ContextMenuSubContentProps =
  ContextMenuPrimitive.ContextMenuSubContentProps & CSSProps

const ContextMenuSubContent: FC<ContextMenuSubContentProps> = (props) => (
  <ContextMenuPrimitive.Portal>
    <StyledSubContent {...props} />
  </ContextMenuPrimitive.Portal>
)

const ContextMenuItem = styled(ContextMenuPrimitive.Item, styles.item)
type ContextMenuItemProps = ContextMenuPrimitive.ContextMenuItemProps & CSSProps

const ContextMenuCheckboxItem = styled(
  ContextMenuPrimitive.CheckboxItem,
  styles.checkboxItem
)
type ContextMenuCheckboxItemProps =
  ContextMenuPrimitive.ContextMenuCheckboxItemProps & CSSProps

const ContextMenuRadioItem = styled(
  ContextMenuPrimitive.RadioItem,
  styles.radioItem
)
type ContextMenuRadioItemProps =
  ContextMenuPrimitive.ContextMenuRadioItemProps & CSSProps

const ContextMenuSubTrigger = styled(
  ContextMenuPrimitive.SubTrigger,
  styles.subTrigger
)
type ContextMenuSubTriggerProps =
  ContextMenuPrimitive.ContextMenuSubTriggerProps & CSSProps

const ContextMenuLabel = styled(ContextMenuPrimitive.Label, styles.label)
type ContextMenuLabelProps = ContextMenuPrimitive.ContextMenuLabelProps &
  CSSProps

const ContextMenuSeparator = styled(
  ContextMenuPrimitive.Separator,
  styles.separator
)
type ContextMenuSeparatorProps =
  ContextMenuPrimitive.ContextMenuSeparatorProps & CSSProps

const ContextMenuItemIndicator = styled(
  ContextMenuPrimitive.ItemIndicator,
  styles.itemIndicator
)
type ContextMenuItemIndicatorProps =
  ContextMenuPrimitive.ContextMenuItemIndicatorProps & CSSProps

const ContextMenu = ContextMenuPrimitive.Root
const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup
const ContextMenuTrigger = ContextMenuPrimitive.Trigger
const ContextMenuSub = ContextMenuPrimitive.Sub

const ContextMenuRightSlot = styled('div', styles.rightSlot)
type ContextMenuRightSlotProps = StyledComponent<'div'> & CSSProps

type GeneralizedContextMenuProps = {
  trigger: {
    children: ReactNode
    props?: ContextMenuPrimitive.ContextMenuTriggerProps
  }
  contentProps?: ContextMenuPrimitive.ContextMenuContentProps
  items: (
    | {
        kind: 'ITEM'
        label: ReactNode
        props?: ContextMenuItemProps
        rightSlot?: { children?: ReactNode; props?: ContextMenuRightSlotProps }
      }
    | {
        kind: 'SEPARATOR'
        props?: ContextMenuSeparatorProps
      }
    | {
        kind: 'CHECKBOX'
        label: ReactNode
        props?: ContextMenuCheckboxItemProps
        itemIndicator?: {
          children?: ReactNode
          props?: ContextMenuItemIndicatorProps
        }
        rightSlot?: { children?: ReactNode; props?: ContextMenuRightSlotProps }
      }
    | {
        kind: 'LABEL'
        label: string
        props?: ContextMenuLabelProps
      }
    | {
        props?: ContextMenuPrimitive.MenuRadioGroupProps
        items: {
          label: ReactNode
          props: ContextMenuRadioItemProps
          itemIndicator?: {
            children?: ReactNode
            props?: ContextMenuItemIndicatorProps
          }
        }[]
        kind: 'RADIO_GROUP'
      }
    | {
        kind: 'SUB_MENU'
        subContent?: ContextMenuSubContentProps
        trigger: {
          label: ReactNode
          rightSlot?: {
            children: ReactNode
            props?: ContextMenuRightSlotProps
          }
          props?: ContextMenuSubTriggerProps
        }
        items: GeneralizedContextMenuProps['items']
      }
  )[]
} & ContextMenuPrimitive.ContextMenuProps

function generateItems(items: GeneralizedContextMenuProps['items']) {
  return items.map((item) => {
    const id = uuidv4()
    switch (item.kind) {
      case 'CHECKBOX':
        return (
          <ContextMenuCheckboxItem key={id} {...item.props}>
            <ContextMenuItemIndicator {...item.itemIndicator?.props}>
              {item.itemIndicator?.children || <CheckIcon />}
            </ContextMenuItemIndicator>
            {item.label}
            {item.rightSlot && (
              <ContextMenuRightSlot {...item.rightSlot.props}>
                {item.rightSlot.children}
              </ContextMenuRightSlot>
            )}
          </ContextMenuCheckboxItem>
        )
      case 'ITEM':
        return (
          <ContextMenuItem key={id} {...item.props}>
            {item.label}
            {item.rightSlot && (
              <ContextMenuRightSlot {...item.rightSlot.props}>
                {item.rightSlot.children}
              </ContextMenuRightSlot>
            )}
          </ContextMenuItem>
        )
      case 'LABEL':
        return (
          <ContextMenuLabel key={id} {...item.props}>
            {item.label}
          </ContextMenuLabel>
        )
      case 'RADIO_GROUP':
        return (
          <ContextMenuRadioGroup key={id} {...item.props}>
            {item.items.map(({ label, props, itemIndicator }) => (
              <ContextMenuRadioItem key={uuidv4()} {...props}>
                <ContextMenuItemIndicator {...itemIndicator?.props}>
                  {itemIndicator?.children || <DotFilledIcon />}
                </ContextMenuItemIndicator>
                {label}
              </ContextMenuRadioItem>
            ))}
          </ContextMenuRadioGroup>
        )
      case 'SEPARATOR':
        return <ContextMenuSeparator key={id} {...item.props} />

      case 'SUB_MENU':
        return (
          <ContextMenuSub key={id}>
            <ContextMenuSubTrigger {...item.trigger.props}>
              {item.trigger.label}
              {item.trigger.rightSlot && (
                <ContextMenuRightSlot {...item.trigger.rightSlot.props}>
                  {item.trigger.rightSlot.children}
                </ContextMenuRightSlot>
              )}
            </ContextMenuSubTrigger>
            <ContextMenuSubContent {...item?.subContent}>
              {generateItems(item.items)}
            </ContextMenuSubContent>
          </ContextMenuSub>
        )

      default:
        break
    }
  })
}

const GeneralizedContextMenu: FC<GeneralizedContextMenuProps> = ({
  trigger,
  contentProps,
  items,
  ...props
}) => (
  <ContextMenu {...props}>
    <ContextMenuTrigger {...trigger.props}>
      {trigger.children}
    </ContextMenuTrigger>

    <ContextMenuContent {...contentProps}>
      {generateItems(items)}
    </ContextMenuContent>
  </ContextMenu>
)

export {
  ContextMenuContent,
  ContextMenuSubContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuTrigger,
  ContextMenuSubTrigger,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuItemIndicator,
  ContextMenu,
  ContextMenuRadioGroup,
  ContextMenuSub,
  ContextMenuRightSlot,
  GeneralizedContextMenu,
}

export type {
  ContextMenuContentProps,
  ContextMenuSubContentProps,
  ContextMenuItemProps,
  ContextMenuCheckboxItemProps,
  ContextMenuRadioItemProps,
  ContextMenuSubTriggerProps,
  ContextMenuLabelProps,
  ContextMenuSeparatorProps,
  ContextMenuItemIndicatorProps,
  ContextMenuRightSlotProps,
  GeneralizedContextMenuProps,
}
