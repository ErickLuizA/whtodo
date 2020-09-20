import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Dashboard from '../screens/Dashboard'

const {Screen, Navigator} = createStackNavigator()

function AppRoutes() {
  return (
    <Navigator>
      <Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
    </Navigator>
  )
}

export default AppRoutes
