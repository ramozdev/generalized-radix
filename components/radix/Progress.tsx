import { styled } from 'stitches.config'
import * as ProgressPrimitive from '@radix-ui/react-progress'
import * as styles from './styles/Progress'

export const Progress = styled(ProgressPrimitive.Root, styles.root)

export const ProgressIndicator = styled(
  ProgressPrimitive.Indicator,
  styles.indicator
)
