import { Flex } from 'components/ui'
import { Colors } from 'context/types'
import React, { FC } from 'react'
import { CSSProps } from 'stitches.config'
import { Checkbox, CheckboxProps } from './Checkbox'
import { Label, LabelProps } from './Label'

type Props = {
  labelProps?: LabelProps
  checkboxProps?: CheckboxProps & { color?: Colors }
} & CSSProps

export const CheckboxWithLabel: FC<Props> = ({
  checkboxProps,
  labelProps,
  children,
  ...props
}) => (
  <Flex {...props} css={{ alignItems: 'center', ...props?.css }}>
    <Checkbox {...checkboxProps} />
    <Label
      css={{ paddingLeft: 12, ...labelProps?.css }}
      htmlFor={checkboxProps?.id}
      {...labelProps}
    >
      {children}
    </Label>
  </Flex>
)
