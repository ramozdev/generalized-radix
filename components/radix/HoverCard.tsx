import { CSSProps, styled } from 'stitches.config'
import * as HoverCardPrimitive from '@radix-ui/react-hover-card'
import { FC, ReactNode } from 'react'
import * as styles from './styles/HoverCard'

const HoverCardContent = styled(HoverCardPrimitive.Content, styles.content)
type HoverCardContentProps = HoverCardPrimitive.HoverCardContentProps & CSSProps

const HoverCardArrow = styled(HoverCardPrimitive.Arrow, styles.arrow)
type HoverCardArrowProps = HoverCardPrimitive.HoverCardArrowProps & CSSProps

const HoverCard = HoverCardPrimitive.Root
const HoverCardTrigger = HoverCardPrimitive.Trigger

type GeneralizedHoverCardProps = {
  trigger: {
    children: ReactNode
    props?: HoverCardPrimitive.HoverCardTriggerProps
  }
  arrowProps?: HoverCardArrowProps
  contentProps?: HoverCardContentProps
} & HoverCardPrimitive.HoverCardProps

const GeneralizedHoverCard: FC<GeneralizedHoverCardProps> = ({
  trigger,
  contentProps,
  children,
  arrowProps,
  ...props
}) => (
  <HoverCard {...props}>
    <HoverCardTrigger {...trigger.props}>{trigger.children}</HoverCardTrigger>
    <HoverCardContent {...contentProps}>
      {children}
      <HoverCardArrow {...arrowProps} />
    </HoverCardContent>
  </HoverCard>
)

export {
  HoverCardContent,
  HoverCardArrow,
  HoverCard,
  HoverCardTrigger,
  GeneralizedHoverCard,
}

export type {
  HoverCardContentProps,
  HoverCardArrowProps,
  GeneralizedHoverCardProps,
}
