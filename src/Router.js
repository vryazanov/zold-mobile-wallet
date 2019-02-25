import { createStackNavigator, createAppContainer } from 'react-navigation'

import Loading from './containers/Loading'
import Home from './containers/Home'
import PhoneSignIn from './components/PhoneSignIn'
import SMSConfirm from './containers/SMSConfirm'


const AppNavigator = createStackNavigator({
    Loading,
    Home,
    PhoneSignIn,
    SMSConfirm
  }, {
    initialRouteName: 'Loading',
    headerMode: 'none',
  }
)
  
export default createAppContainer(AppNavigator)
