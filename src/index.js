import React, { Component} from 'react'
import { registerRootComponent } from 'expo'
import { View } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage'

import styles from './styles'
import reducer from './reducers'
import Router from './Router'
import Header from './ui/Header'

const persistConfig = {
  key: 'root',
  storage,
}
const _persistReducer = persistReducer(persistConfig, reducer)
const store = createStore(_persistReducer, applyMiddleware(thunkMiddleware))
const persistor = persistStore(store)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Header />
          <Router />
        </PersistGate>
      </Provider>
    );
  }
}


export default registerRootComponent(App)