import React, { Component} from 'react'
import { registerRootComponent } from 'expo'
import { View } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'

import styles from './styles'
import reducer from './reducers'
import Router from './Router'
import Header from './ui/Header'


const store = createStore(reducer, applyMiddleware(thunkMiddleware))


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <Router />
      </Provider>
    );
  }
}


export default registerRootComponent(App)