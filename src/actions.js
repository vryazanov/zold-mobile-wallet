export const SET_TOKEN = 'SET_TOKEN'

export const setToken = token => dispatch => dispatch({
  type: 'SET_TOKEN',
  token,
})