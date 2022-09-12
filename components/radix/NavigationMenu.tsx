import { CSSProps, styled } from 'stitches.config'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { CaretDownIcon } from '@radix-ui/react-icons'
import { ComponentProps, ElementRef, forwardRef } from 'react'
import * as styles from './styles/NavigationMenu'
import { StyledComponent } from '@stitches/react/types/styled-component'

const NavigationMenu = styled(NavigationMenuPrimitive.Root, styles.root)
type NavigationMenuProps = NavigationMenuPrimitive.NavigationMenuProps &
  CSSProps

const NavigationMenuList = styled(NavigationMenuPrimitive.List, styles.list)
type NavigationMenuListProps = NavigationMenuPrimitive.NavigationMenuListProps &
  CSSProps

const NavigationMenuStyledTrigger = styled(
  NavigationMenuPrimitive.Trigger,
  styles.trigger
)
type NavigationMenuStyledTriggerProps =
  NavigationMenuPrimitive.NavigationMenuTriggerProps & CSSProps

const StyledCaret = styled(CaretDownIcon, styles.caretDown)
type StyledCaretProps = ComponentProps<typeof CaretDownIcon> & CSSProps

type NavigationMenuTriggerProps = {
  caretProps?: StyledCaretProps
} & NavigationMenuStyledTriggerProps
const NavigationMenuTrigger = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  NavigationMenuTriggerProps
>(({ children, caretProps, ...props }, forwardedRef) => (
  <NavigationMenuStyledTrigger {...props} ref={forwardedRef}>
    {children}
    <StyledCaret {...caretProps} />
  </NavigationMenuStyledTrigger>
))

const NavigationMenuLink = styled(NavigationMenuPrimitive.Link, styles.link)

const NavigationMenuContent = styled(
  NavigationMenuPrimitive.Content,
  styles.content
)

const StyledIndicator = styled(
  NavigationMenuPrimitive.Indicator,
  styles.indicator
)
type StyledIndicatorProps =
  NavigationMenuPrimitive.NavigationMenuIndicatorProps & CSSProps

const StyledArrow = styled('div', styles.arrow)
type StyledArrowProps = StyledComponent<'div'> & CSSProps

type NavigationMenuIndicatorProps = {
  arrowProps?: StyledArrowProps
} & StyledIndicatorProps
const NavigationMenuIndicator = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  NavigationMenuIndicatorProps
>(({ arrowProps, ...props }, forwardedRef) => (
  <StyledIndicator {...props} ref={forwardedRef}>
    <StyledArrow {...arrowProps} />
  </StyledIndicator>
))

const NavigationMenuViewport = styled(
  NavigationMenuPrimitive.Viewport,
  styles.viewport
)

const NavigationMenuItem = NavigationMenuPrimitive.Item

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuTrigger,
  StyledCaret,
  NavigationMenuLink,
  NavigationMenuContent,
  StyledIndicator,
  StyledArrow,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  NavigationMenuItem,
}

export type {
  NavigationMenuProps,
  NavigationMenuListProps,
  NavigationMenuTriggerProps,
  StyledCaretProps,
  StyledIndicatorProps,
  StyledArrowProps,
  NavigationMenuIndicatorProps,
}
