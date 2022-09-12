import { CSSProps, styled } from 'stitches.config'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import { FC } from 'react'
import * as styles from './styles/Switch'

const Switch = styled(SwitchPrimitive.Root, styles.root)
type SwitchProps = SwitchPrimitive.SwitchProps & CSSProps

const SwitchThumb = styled(SwitchPrimitive.Thumb, styles.thumb)
type SwitchThumbProps = SwitchPrimitive.SwitchThumbProps & CSSProps

type GeneralizedSwtichProps = {
  thumbProps?: SwitchThumbProps
} & SwitchProps

const GeneralizedSwtich: FC<GeneralizedSwtichProps> = ({
  thumbProps,
  ...props
}) => (
  <Switch {...props}>
    <SwitchThumb {...thumbProps} />
  </Switch>
)

export { Switch, SwitchThumb, GeneralizedSwtich }

export type { SwitchProps, SwitchThumbProps, GeneralizedSwtichProps }
