/*
@todo #2:30min I've added `react-navigation` package to requirements. Introduce here routes
 and their components for the following pages: policy, terms of use. Find the way how to
 show texts from https://www.zerocracy.com/terms.html and https://www.zerocracy.com/policy.html
*/
import { createStackNavigator, createAppContainer } from 'react-navigation'

import Loading from './Loading'
import Home from './components/Home'
import PhoneSignIn from './components/PhoneSignIn'
import SMSConfirm from './containers/SMSConfirm'


const AppNavigator = createStackNavigator({
        Loading,
        Home,
        PhoneSignIn,
        SMSConfirm
    }, {
        initialRouteName: 'Loading',
        headerMode: 'none'
    }
)
  
export default createAppContainer(AppNavigator)
