import { CSSProps, styled } from 'stitches.config'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { FC, ReactNode } from 'react'
import * as styles from './styles/Slider'

const Slider = styled(SliderPrimitive.Root, styles.root)
type SliderProps = SliderPrimitive.SliderProps & CSSProps

const SliderTrack = styled(SliderPrimitive.Track, styles.track)
type SliderTrackProps = SliderPrimitive.SliderTrackProps & CSSProps

const SliderRange = styled(SliderPrimitive.Range, styles.range)
type SliderRangeProps = SliderPrimitive.SliderRangeProps & CSSProps

const SliderThumb = styled(SliderPrimitive.Thumb, styles.thumb)
type SliderThumbProps = SliderPrimitive.SliderThumbProps & CSSProps

type GeneralizedSliderProps = {
  track?: { children?: ReactNode; props?: SliderTrackProps }
  range?: { props?: SliderRangeProps }
  thumb?: { props?: SliderThumbProps }
} & SliderProps

const GeneralizedSlider: FC<GeneralizedSliderProps> = ({
  track,
  range,
  thumb,
  ...props
}) => (
  <Slider {...props}>
    <SliderTrack {...track?.props}>
      {track?.children || <SliderRange {...range?.props} />}
    </SliderTrack>
    <SliderThumb {...thumb?.props} />
  </Slider>
)

export { Slider, SliderTrack, SliderRange, SliderThumb, GeneralizedSlider }

export type {
  SliderProps,
  SliderTrackProps,
  SliderRangeProps,
  SliderThumbProps,
  GeneralizedSliderProps,
}
