import { ElementRef, FC, forwardRef, ReactNode } from 'react'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { CSSProps, styled } from 'stitches.config'
import { v4 as uuidv4 } from 'uuid'
import * as styles from './styles/Accordion'
import { StyledComponent } from '@stitches/react/types/styled-component'

const Accordion = styled(AccordionPrimitive.Root, styles.root)
type AccordionProps = (
  | AccordionPrimitive.AccordionSingleProps
  | AccordionPrimitive.AccordionMultipleProps
) &
  CSSProps

const AccordionItem = styled(AccordionPrimitive.Item, styles.item)
type AccordionItemProps = AccordionPrimitive.AccordionItemProps & CSSProps

const AccordionHeader = styled(AccordionPrimitive.Header, styles.header)
type AccordionHeaderProps = AccordionPrimitive.AccordionHeaderProps & CSSProps

const AccordionTrigger = styled(AccordionPrimitive.Trigger, styles.trigger)
type AccordionTriggerProps = AccordionPrimitive.AccordionTriggerProps & CSSProps

const AccordionContent = styled(AccordionPrimitive.Content, styles.content)
type AccordionContentProps = AccordionPrimitive.AccordionContentProps & CSSProps

const AccordionContentText = styled('div', styles.contentText)
type AccordionContentTextProps = StyledComponent<'div'> & CSSProps

const AccordionChevron = styled(ChevronDownIcon, styles.chevron)
type AccordionChevronProps = StyledComponent<typeof ChevronDownIcon> & CSSProps

type GeneralizedAccordionTriggerProps = {
  triggerProps?: AccordionTriggerProps
  chevronProps?: AccordionChevronProps
} & AccordionHeaderProps
const GeneralizedAccordionTrigger = forwardRef<
  ElementRef<typeof AccordionPrimitive.Trigger>,
  GeneralizedAccordionTriggerProps
>(({ children, triggerProps, chevronProps, ...props }, forwardedRef) => (
  <AccordionHeader {...props}>
    <AccordionTrigger {...triggerProps} ref={forwardedRef}>
      {children}
      <AccordionChevron {...chevronProps} />
    </AccordionTrigger>
  </AccordionHeader>
))

type GeneralizedAccordionContentProps = {
  contentTextProps?: AccordionContentTextProps
} & AccordionContentProps
const GeneralizedAccordionContent = forwardRef<
  ElementRef<typeof AccordionPrimitive.Content>,
  GeneralizedAccordionContentProps
>(({ children, contentTextProps, ...props }, forwardedRef) => (
  <AccordionContent {...props} ref={forwardedRef}>
    <AccordionContentText {...contentTextProps}>
      {children}
    </AccordionContentText>
  </AccordionContent>
))

type GeneralizedAccordionProps = {
  items: {
    itemProps: AccordionItemProps
    trigger: {
      props?: GeneralizedAccordionTriggerProps
      children: ReactNode
    }
    content: {
      props?: GeneralizedAccordionContentProps
      children: ReactNode
    }
  }[]
} & AccordionProps

const GeneralizedAccordion: FC<GeneralizedAccordionProps> = ({
  items,
  ...props
}) => {
  return (
    <Accordion {...props}>
      {items.map(({ content, trigger, itemProps }) => (
        <AccordionItem key={uuidv4()} {...itemProps}>
          <GeneralizedAccordionTrigger {...trigger.props}>
            {trigger.children}
          </GeneralizedAccordionTrigger>
          <GeneralizedAccordionContent {...content.props}>
            {content.children}
          </GeneralizedAccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
  AccordionContentText,
  AccordionChevron,
  GeneralizedAccordionTrigger,
  GeneralizedAccordionContent,
  GeneralizedAccordion,
}

export type {
  AccordionProps,
  AccordionItemProps,
  AccordionHeaderProps,
  AccordionTriggerProps,
  AccordionContentProps,
  AccordionContentTextProps,
  AccordionChevronProps,
  GeneralizedAccordionTriggerProps,
  GeneralizedAccordionContentProps,
  GeneralizedAccordionProps,
}
