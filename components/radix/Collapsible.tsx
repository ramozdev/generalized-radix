import { styled } from 'stitches.config'
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'
import * as styles from './styles/Collapsible'

const Collapsible = styled(CollapsiblePrimitive.Root, styles.root)

const CollapsibleTrigger = CollapsiblePrimitive.Trigger
const CollapsibleContent = CollapsiblePrimitive.Content

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
