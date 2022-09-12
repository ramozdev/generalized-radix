import { CSSProps, styled } from 'stitches.config'
import * as TogglePrimitive from '@radix-ui/react-toggle'
import * as styles from './styles/Toggle'

const Toggle = styled(TogglePrimitive.Root, styles.root)
type ToggleProps = TogglePrimitive.ToggleProps & CSSProps

export { Toggle }

export type { ToggleProps }
