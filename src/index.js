import React, { Component} from 'react'
import { registerRootComponent } from 'expo'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'

import reducer from './reducers'
import Router from './Router'

const store = createStore(reducer, applyMiddleware(thunkMiddleware))

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}


export default registerRootComponent(App)