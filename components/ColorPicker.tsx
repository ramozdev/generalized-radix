import { GlobalContext } from 'context/GlobalState'
import { Colors } from 'context/types'
import React, { FC, useContext } from 'react'
import { colors } from 'utils/colors'
import { GeneralizedSelect, GeneralizedSelectProps } from './radix'

const ColorPicker: FC = () => {
  const { dispatch } = useContext(GlobalContext)
  const iterableColors: GeneralizedSelectProps['items'][0]['items'] =
    colors.map((color) => ({
      props: { value: color },
      label: color,
    }))

  return (
    <GeneralizedSelect
      defaultValue="gray"
      onValueChange={(value) =>
        dispatch({ type: 'PICK_COLOR', payload: value as Colors })
      }
      items={[{ label: { children: 'Colors' }, items: iterableColors }]}
    />
  )
}

export default ColorPicker
