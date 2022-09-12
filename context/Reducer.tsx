import { Action, State } from './types'

const Reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'PICK_COLOR':
      return { ...state, color: action.payload }
    default:
      return state
  }
}

export default Reducer
