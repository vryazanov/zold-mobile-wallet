/*
@todo #2:30min I've added `react-navigation` package to requirements. Introduce here routes
 and their components for the following pages: policy, terms of use. Find the way how to
 show texts from https://www.zerocracy.com/terms.html and https://www.zerocracy.com/policy.html
*/
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './Home'

import PhoneSignIn from './components/PhoneSignIn'
import SMSConfirm from './components/SMSConfirm'


const AppNavigator = createStackNavigator({
    Home: {
      screen: Home,
    },
    PhoneSignIn: {
      screen: PhoneSignIn,
      navigationOptions: {
        header: null,
      }
    },
    SMSConfirm: {
      screen: SMSConfirm,
      navigationOptions: {
        header: null,
      }
    }
  }, {
    initialRouteName: 'Home',
  }
)
  
export default createAppContainer(AppNavigator)