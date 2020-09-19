import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Home from '../screens/Home'

const {Screen, Navigator} = createStackNavigator()

function AuthRoutes() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} options={{headerShown: false}} />
    </Navigator>
  )
}

export default AuthRoutes
