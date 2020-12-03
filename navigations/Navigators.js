import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignUp from '../screens/auth/SignUp'
import SignIn from '../screens/auth/SignIn'


const AuthNav = createSwitchNavigator({
    SignIn:{
      screen: SignIn,
      
     
    },
    SignUp:{
        screen:SignUp
    }
  }, {initialRouteName:'SignIn'})




  

  export default createAppContainer(AuthNav)