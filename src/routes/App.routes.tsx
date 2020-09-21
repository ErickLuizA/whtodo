import React, {useContext} from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'

import Dashboard from '../screens/Dashboard'
import {AuthContext} from '../context/AuthContext'
import {Avatar, useTheme} from 'react-native-paper'
import {Text} from 'react-native-svg'

const {Screen, Navigator} = createDrawerNavigator()

function Drawer() {
  const {user} = useContext(AuthContext)
  const {colors} = useTheme()

  return (
    <Navigator
      initialRouteName="Dashboard"
      drawerContentOptions={{
        labelStyle: {color: colors.secondary},
        activeBackgroundColor: '#bbe',
      }}
      drawerStyle={{
        backgroundColor: colors.primary,
      }}>
      <Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          drawerIcon: () =>
            user?.photoURL ? (
              <Avatar.Image source={{uri: user?.photoURL}} />
            ) : (
              <Avatar.Icon icon="account" />
            ),
        }}
      />
    </Navigator>
  )
}

export default Drawer
