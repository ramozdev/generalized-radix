import { CSSProps, styled } from 'stitches.config'
import * as ToolbarPrimitive from '@radix-ui/react-toolbar'
import { FC, ReactNode } from 'react'
import { v4 as uuidv4 } from 'uuid'
import * as styles from './styles/Toolbar'

const Toolbar = styled(ToolbarPrimitive.Root, styles.root)
type ToolbarProps = ToolbarPrimitive.ToolbarProps & CSSProps

const ToolbarButton = styled(ToolbarPrimitive.Button, styles.button)
type ToolbarButtonProps = ToolbarPrimitive.ToolbarButtonProps & CSSProps

const ToolbarLink = styled(ToolbarPrimitive.Link, styles.link)
type ToolbarLinkProps = ToolbarPrimitive.ToolbarLinkProps & CSSProps

const ToolbarSeparator = styled(ToolbarPrimitive.Separator, styles.separator)
type ToolbarSeparatorProps = ToolbarPrimitive.ToolbarSeparatorProps & CSSProps

const ToolbarToggleGroup = styled(
  ToolbarPrimitive.ToggleGroup,
  styles.toggleGroup
)
type ToolbarToggleGroupProps = (
  | ToolbarPrimitive.ToolbarToggleGroupMultipleProps
  | ToolbarPrimitive.ToolbarToggleGroupSingleProps
) &
  CSSProps

const ToolbarToggleItem = styled(ToolbarPrimitive.ToggleItem, styles.toggleItem)
type ToolbarToggleItemProps = ToolbarPrimitive.ToolbarToggleItemProps & CSSProps

type GeneralizedToolbarProps = {
  items: (
    | {
        kind: 'BUTTON'
        children: ReactNode
        props?: ToolbarButtonProps
      }
    | {
        kind: 'SEPARATOR'
        props?: ToolbarSeparatorProps
      }
    | {
        kind: 'LINK'
        children: ReactNode
        props?: ToolbarLinkProps
      }
    | {
        kind: 'TOGGLE_GROUP'
        props: ToolbarToggleGroupProps
        items: {
          children: ReactNode
          props: ToolbarToggleItemProps
        }[]
      }
    | {
        kind: 'TOGGLE_ITEM'
        children: ReactNode
        props: ToolbarToggleItemProps
      }
  )[]
} & ToolbarProps

function generateItems(items: GeneralizedToolbarProps['items']) {
  return items.map((item) => {
    const id = uuidv4()
    switch (item.kind) {
      case 'TOGGLE_ITEM':
        return (
          <ToolbarToggleItem key={id} {...item.props}>
            {item.children}
          </ToolbarToggleItem>
        )

      case 'LINK':
        return (
          <ToolbarLink key={id} {...item.props}>
            {item.children}
          </ToolbarLink>
        )

      case 'BUTTON':
        return (
          <ToolbarButton key={id} {...item.props}>
            {item.children}
          </ToolbarButton>
        )

      case 'SEPARATOR':
        return <ToolbarSeparator key={id} {...item.props} />

      case 'TOGGLE_GROUP':
        return (
          <ToolbarToggleGroup key={id} {...item.props}>
            {item.items.map((item) => (
              <ToolbarToggleItem key={uuidv4()} {...item.props}>
                {item.children}
              </ToolbarToggleItem>
            ))}
          </ToolbarToggleGroup>
        )

      default:
        break
    }
  })
}

const GeneralizedToolbar: FC<GeneralizedToolbarProps> = ({
  items,
  ...props
}) => <Toolbar {...props}>{generateItems(items)}</Toolbar>

export {
  Toolbar,
  ToolbarButton,
  ToolbarLink,
  ToolbarSeparator,
  ToolbarToggleGroup,
  ToolbarToggleItem,
  GeneralizedToolbar,
}

export type {
  ToolbarProps,
  ToolbarButtonProps,
  ToolbarLinkProps,
  ToolbarSeparatorProps,
  ToolbarToggleGroupProps,
  ToolbarToggleItemProps,
  GeneralizedToolbarProps,
}
