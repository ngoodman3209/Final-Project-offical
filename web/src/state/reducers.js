import { combineReducers } from 'redux'

import users from '../process/users/reducer'
import TYPES from './types'

const appReducer = combineReducers({
  users
})

export default (state, action) => {
  if (action.type === TYPES.RESET_ALL_USER_DATA_SUCCESS) {
    state = undefined
  }

  return appReducer(state, action)
}
