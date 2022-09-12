import { styled } from 'stitches.config'
import * as ToastPrimitive from '@radix-ui/react-toast'
import * as styles from './styles/Toast'

const ToastViewport = styled(ToastPrimitive.Viewport, styles.viewport)

const Toast = styled(ToastPrimitive.Root, styles.root)

const ToastTitle = styled(ToastPrimitive.Title, styles.title)

const ToastDescription = styled(ToastPrimitive.Description, styles.description)

const ToastAction = styled(ToastPrimitive.Action, styles.action)

const ToastProvider = ToastPrimitive.Provider
const ToastClose = ToastPrimitive.Close

export {
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastProvider,
  ToastClose,
}
