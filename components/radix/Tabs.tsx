import { CSSProps, styled } from 'stitches.config'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { FC, ReactNode } from 'react'
import { v4 as uuidv4 } from 'uuid'
import * as styles from './styles/Tabs'

const Tabs = styled(TabsPrimitive.Root, styles.root)
type TabsProps = TabsPrimitive.TabsProps & CSSProps

const TabsList = styled(TabsPrimitive.List, styles.list)
type ListProps = TabsPrimitive.TabsListProps & CSSProps

const TabsTrigger = styled(TabsPrimitive.Trigger, styles.trigger)
type TriggerProps = TabsPrimitive.TabsTriggerProps & CSSProps

const TabsContent = styled(TabsPrimitive.Content, styles.content)
type ContentProps = TabsPrimitive.TabsContentProps & CSSProps

type GeneralizedTabsProps = {
  tabsListProps?: ListProps
  items: {
    trigger: { props: TriggerProps; children: ReactNode }
    content: { props: ContentProps; children: ReactNode }
  }[]
} & TabsProps

const GeneralizedTabs: FC<GeneralizedTabsProps> = ({
  tabsListProps,
  items,
  ...props
}) => (
  <Tabs {...props}>
    <TabsList {...tabsListProps}>
      {items.map(({ trigger: { children, props } }) => (
        <TabsTrigger key={uuidv4()} {...props}>
          {children}
        </TabsTrigger>
      ))}
    </TabsList>
    {items.map(({ content: { children, props } }) => (
      <TabsContent key={uuidv4()} {...props}>
        {children}
      </TabsContent>
    ))}
  </Tabs>
)

export { Tabs, TabsList, TabsTrigger, TabsContent, GeneralizedTabs }

export type {
  TabsProps,
  ListProps,
  TriggerProps,
  ContentProps,
  GeneralizedTabsProps,
}
