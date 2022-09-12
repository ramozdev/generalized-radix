import { styled, CSSProps } from 'stitches.config'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { FC, ReactNode } from 'react'
import * as styles from './styles/Dialog'

const DialogOverlay = styled(DialogPrimitive.Overlay, styles.overlay)
type DialogOverlayProps = DialogPrimitive.DialogOverlayProps & CSSProps

const DialogStyledContent = styled(DialogPrimitive.Content, styles.content)
type DialogStyledContentProps = DialogPrimitive.DialogContentProps & CSSProps

type DialogContentProps = {
  overlayProps?: DialogOverlayProps
} & DialogStyledContentProps
const DialogContent: FC<DialogContentProps> = ({
  children,
  overlayProps,
  ...props
}) => {
  return (
    <DialogPrimitive.Portal>
      <DialogOverlay {...overlayProps} />
      <DialogStyledContent {...props}>{children}</DialogStyledContent>
    </DialogPrimitive.Portal>
  )
}

const DialogTitle = styled(DialogPrimitive.Title, styles.title)
type DialogTitleProps = DialogPrimitive.DialogTitleProps & CSSProps

const DialogDescription = styled(
  DialogPrimitive.Description,
  styles.description
)
type DialogDescriptionProps = DialogPrimitive.DialogDescriptionProps & CSSProps

const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogClose = DialogPrimitive.Close

type GeneralizedDialogProps = {
  trigger: { props?: DialogPrimitive.DialogTriggerProps; children: ReactNode }
  title?: { props?: DialogTitleProps; children: ReactNode }
  contentProps?: DialogContentProps
  description?: { props?: DialogDescriptionProps; children: ReactNode }
} & DialogPrimitive.DialogProps

const GeneralizedDialog: FC<GeneralizedDialogProps> = ({
  trigger,
  title,
  contentProps,
  description,
  children,
  ...props
}) => (
  <Dialog {...props}>
    <DialogTrigger {...trigger.props}>{trigger.children}</DialogTrigger>
    <DialogContent {...contentProps}>
      {title && <DialogTitle {...title.props}>{title.children}</DialogTitle>}
      {description && (
        <DialogDescription {...description.props}>
          {description.children}
        </DialogDescription>
      )}
      {children}
    </DialogContent>
  </Dialog>
)

export {
  DialogOverlay,
  DialogStyledContent,
  DialogContent,
  DialogTitle,
  DialogDescription,
  Dialog,
  DialogTrigger,
  DialogClose,
  GeneralizedDialog,
}

export type {
  DialogOverlayProps,
  DialogStyledContentProps,
  DialogContentProps,
  DialogTitleProps,
  DialogDescriptionProps,
  GeneralizedDialogProps,
}
