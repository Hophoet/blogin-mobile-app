import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignUp from '../screens/auth/SignUp'
import SignIn from '../screens/auth/SignIn'
import Loader from '../screens/auth/Loader'
import Home from '../screens/main/Home'
import PostDetail from '../screens/main/PostDetail'

const AuthNav = createSwitchNavigator({
    SignIn:{
      screen: SignIn,
      
     
    },
    SignUp:{
        screen:SignUp
    },
    Loader:{
      screen: Loader,
    },
    Home:{
      screen:Home,
    },
    PostDetail:{
      screen:PostDetail
    }

  }, {initialRouteName:'Home'})




  

  export default createAppContainer(AuthNav)