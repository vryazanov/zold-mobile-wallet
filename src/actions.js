export const SET_TOKEN = 'SET_TOKEN'
export const SET_BALANCE = 'SET_BALANCE'

export const setToken = token => dispatch => dispatch({
  type: 'SET_TOKEN',
  token,
})

export const setBalance = balance => dispatch => dispatch({
  type: 'SET_BALANCE',
  balance,
})
