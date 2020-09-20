import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Home from '../screens/Home'
import Login from '../screens/Login'
import Register from '../screens/Register'

const {Screen, Navigator} = createStackNavigator()

function AuthRoutes() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} options={{headerShown: false}} />
      <Screen name="Login" component={Login} options={{headerShown: false}} />
      <Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
    </Navigator>
  )
}

export default AuthRoutes
