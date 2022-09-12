import { CSSProps, styled } from 'stitches.config'
import * as LabelPrimitive from '@radix-ui/react-label'
import * as styles from './styles/Label'

const Label = styled(LabelPrimitive.Root, styles.root)
type LabelProps = LabelPrimitive.LabelProps & CSSProps

export { Label }

export type { LabelProps }
