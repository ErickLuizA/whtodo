import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Drawer from './Drawer'
import Task from '../screens/Application/Task'

export type AppRoutesParamList = {
  Drawer: { result: string }
  Task: { action: string; task: string }
  AddTask: { result: string }
}

const { Screen, Navigator } = createStackNavigator<AppRoutesParamList>()

function AppRoutes() {
  return (
    <Navigator
      initialRouteName="Drawer"
      screenOptions={{
        transitionSpec: {
          open: {
            animation: 'timing',
            config: {
              duration: 400,
            },
          },
          close: {
            animation: 'timing',
            config: {
              duration: 400,
            },
          },
        },
      }}>
      <Screen
        name="Drawer"
        component={Drawer}
        options={{
          headerShown: false,
        }}
      />
      <Screen name="Task" component={Task} />
    </Navigator>
  )
}

export default AppRoutes
