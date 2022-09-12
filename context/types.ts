import { colorVariants } from 'utils/colors'

export type Colors = keyof typeof colorVariants

export type State = {
  color: Colors
}

export type Action = {
  type: 'PICK_COLOR'
  payload: Colors
}
