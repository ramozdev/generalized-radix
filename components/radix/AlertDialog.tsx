import { CSSProps, styled } from 'stitches.config'
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import { FC, ReactNode } from 'react'
import * as styles from './styles/AlertDialog'

const AlertDialogOverlay = styled(AlertDialogPrimitive.Overlay, styles.overlay)
type AlertDialogOverlayProps = AlertDialogPrimitive.AlertDialogOverlayProps &
  CSSProps

const StyledContent = styled(AlertDialogPrimitive.Content, styles.content)
type StyledContentProps = AlertDialogPrimitive.AlertDialogContentProps &
  CSSProps

type AlertDialogContentProps = {
  overlayProps?: AlertDialogOverlayProps
} & StyledContentProps
const AlertDialogContent: FC<AlertDialogContentProps> = ({
  children,
  overlayProps,
  ...props
}) => {
  return (
    <AlertDialogPrimitive.Portal>
      <AlertDialogOverlay {...overlayProps} />
      <StyledContent {...props}>{children}</StyledContent>
    </AlertDialogPrimitive.Portal>
  )
}

const AlertDialogTitle = styled(AlertDialogPrimitive.Title, styles.title)
type AlertDialogTitleProps = AlertDialogPrimitive.AlertDialogTitleProps &
  CSSProps

const AlertDialogDescription = styled(
  AlertDialogPrimitive.Description,
  styles.description
)
type AlertDialogDescriptionProps =
  AlertDialogPrimitive.AlertDialogDescriptionProps & CSSProps

const AlertDialog = AlertDialogPrimitive.Root
type AlertDialogProps = AlertDialogPrimitive.AlertDialogProps & CSSProps

const AlertDialogTrigger = AlertDialogPrimitive.Trigger
type AlertDialogTriggerProps = AlertDialogPrimitive.AlertDialogTriggerProps &
  CSSProps

const AlertDialogAction = AlertDialogPrimitive.Action
type AlertDialogActionProps = AlertDialogPrimitive.AlertDialogActionProps &
  CSSProps

const AlertDialogCancel = AlertDialogPrimitive.Cancel
type AlertDialogCancelProps = AlertDialogPrimitive.AlertDialogCancelProps &
  CSSProps

type GeneralizedAlertDialogProps = {
  trigger: {
    children: ReactNode
    props?: AlertDialogTriggerProps
  }
  title?: {
    children: ReactNode
    props?: AlertDialogTitleProps
  }
  description?: {
    children: ReactNode
    props?: AlertDialogDescriptionProps
  }
} & AlertDialogProps

const GeneralizedAlertDialog: FC<GeneralizedAlertDialogProps> = ({
  trigger,
  children,
  description,
  title,
  ...props
}) => (
  <AlertDialog {...props}>
    <AlertDialogTrigger asChild {...trigger.props}>
      {trigger.children}
    </AlertDialogTrigger>
    <AlertDialogContent>
      {title && (
        <AlertDialogTitle {...title.props}>{title.children}</AlertDialogTitle>
      )}
      {description && (
        <AlertDialogDescription {...description.props}>
          {description.children}
        </AlertDialogDescription>
      )}
      {children}
    </AlertDialogContent>
  </AlertDialog>
)

export {
  AlertDialogOverlay,
  StyledContent,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogAction,
  AlertDialogCancel,
  GeneralizedAlertDialog,
}

export type {
  AlertDialogOverlayProps,
  StyledContentProps,
  AlertDialogContentProps,
  AlertDialogTitleProps,
  AlertDialogDescriptionProps,
  AlertDialogProps,
  AlertDialogTriggerProps,
  AlertDialogActionProps,
  AlertDialogCancelProps,
  GeneralizedAlertDialogProps,
}
