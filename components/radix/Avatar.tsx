import { CSSProps, styled } from 'stitches.config'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { FC, ReactNode } from 'react'
import * as styles from './styles/Avatar'

const Avatar = styled(AvatarPrimitive.Root, styles.root)
type AvatarProps = AvatarPrimitive.AvatarProps & CSSProps

const AvatarImage = styled(AvatarPrimitive.Image, styles.image)
type AvatarImageProps = AvatarPrimitive.AvatarImageProps & CSSProps

const AvatarFallback = styled(AvatarPrimitive.Fallback, styles.fallback)
type AvatarFallbackProps = AvatarPrimitive.AvatarFallbackProps & CSSProps

type GeneralizedAvatarProps = {
  fallback?: { children: ReactNode; props?: AvatarFallbackProps }
  imageProps: AvatarImageProps
} & AvatarProps

const GeneralizedAvatar: FC<GeneralizedAvatarProps> = ({
  children,
  fallback,
  imageProps,
  ...props
}) => (
  <Avatar {...props}>
    <AvatarImage {...imageProps} />
    {fallback && (
      <AvatarFallback {...fallback.props}>{fallback.children}</AvatarFallback>
    )}
  </Avatar>
)

export { Avatar, AvatarImage, AvatarFallback, GeneralizedAvatar }

export type {
  AvatarProps,
  AvatarImageProps,
  AvatarFallbackProps,
  GeneralizedAvatarProps,
}
