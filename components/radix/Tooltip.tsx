import { CSSProps, styled } from 'stitches.config'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { FC, ReactNode } from 'react'
import * as styles from './styles/Tooltip'
import { StyledComponent } from '@stitches/react/types/styled-component'

const TooltipContent = styled(TooltipPrimitive.Content, styles.content)
type TooltipContentProps = TooltipPrimitive.TooltipContentProps & CSSProps

const TooltipArrow = styled(TooltipPrimitive.Arrow, styles.arrow)
type TooltipArrowProps = TooltipPrimitive.TooltipArrowProps & CSSProps

export const Provider = TooltipPrimitive.Provider
export const Tooltip = TooltipPrimitive.Root
export const TooltipTrigger = TooltipPrimitive.Trigger

const IconButton = styled('button', styles.iconButton)
type IconButtonProps = StyledComponent<'button'> & CSSProps

export type GeneralizedTooltipProps = {
  icon: { children: ReactNode; props?: IconButtonProps }
  arrowProps?: TooltipArrowProps
} & TooltipContentProps

export const GeneralizedTooltip: FC<GeneralizedTooltipProps> = ({
  children,
  icon,
  arrowProps,
  ...props
}) => (
  <Provider>
    <Tooltip>
      <TooltipTrigger asChild>
        <IconButton {...icon.props}>{icon.children}</IconButton>
      </TooltipTrigger>
      <TooltipContent {...props}>
        {children}
        <TooltipArrow {...arrowProps} />
      </TooltipContent>
    </Tooltip>
  </Provider>
)
