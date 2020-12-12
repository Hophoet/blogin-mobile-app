import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignUp from '../screens/auth/SignUp'
import SignIn from '../screens/auth/SignIn'
import Loader from '../screens/auth/Loader'

const AuthNav = createSwitchNavigator({
    SignIn:{
      screen: SignIn,
      
     
    },
    SignUp:{
        screen:SignUp
    },
    Loader:{
      screen: Loader,
    }

  }, {initialRouteName:'Loader'})




  

  export default createAppContainer(AuthNav)