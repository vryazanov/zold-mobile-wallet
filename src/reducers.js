import { SET_TOKEN } from './actions'

const defaultState = {
  auth: { 
    token: null
  },
}
const app = (state = defaultState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, auth: { ...state.auth, token: action.token } }
  }
  return state
}

export default app