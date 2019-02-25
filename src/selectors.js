import { createSelector } from 'reselect'

const getAuth = state => state.auth
export const getAuthToken = createSelector(getAuth, auth => auth.token)