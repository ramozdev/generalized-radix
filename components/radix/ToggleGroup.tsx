import { CSSProps, styled } from 'stitches.config'
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'
import { FC, ReactNode } from 'react'
import { v4 as uuidv4 } from 'uuid'
import * as styles from './styles/ToggleGroup'

const ToggleGroup = styled(ToggleGroupPrimitive.Root, styles.root)
type ToggleGroupProps = (
  | ToggleGroupPrimitive.ToggleGroupSingleProps
  | ToggleGroupPrimitive.ToggleGroupMultipleProps
) &
  CSSProps

const ToggleGroupItem = styled(ToggleGroupPrimitive.Item, styles.item)
type ToggleGroupItemProps = ToggleGroupPrimitive.ToggleGroupItemProps & CSSProps

type GeneralizedToggleGroupProps = {
  items: {
    props: ToggleGroupItemProps
    children: ReactNode
  }[]
} & ToggleGroupProps

const GeneralizedToggleGroup: FC<GeneralizedToggleGroupProps> = ({
  items,
  ...props
}) => (
  <ToggleGroup {...props}>
    {items.map((item) => (
      <ToggleGroupItem key={uuidv4()} {...item.props}>
        {item.children}
      </ToggleGroupItem>
    ))}
  </ToggleGroup>
)

export { ToggleGroup, ToggleGroupItem, GeneralizedToggleGroup }

export type {
  ToggleGroupProps,
  ToggleGroupItemProps,
  GeneralizedToggleGroupProps,
}
