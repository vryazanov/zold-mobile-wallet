/*
@todo #2:30min I've added `react-navigation` package to requirements. Introduce here routes
 and their components for the following pages: policy, terms of use. Find the way how to
 show texts from https://www.zerocracy.com/terms.html and https://www.zerocracy.com/policy.html
*/
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './Home'
import SignIn from './SignIn'


const AppNavigator = createStackNavigator({
    Home: {
      screen: Home,
    },
    Signin: {
      screen: SignIn,
      navigationOptions: {
        header: null,
      }
    }
  }, {
    initialRouteName: 'Home',
  }
)
  
export default createAppContainer(AppNavigator)
