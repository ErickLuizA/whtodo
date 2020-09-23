import React, { useContext } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Dashboard from '../screens/Dashboard'
import { AuthContext } from '../context/AuthContext'
import { Avatar, useTheme } from 'react-native-paper'
import Settings from '../screens/Settings'
import { Text } from 'react-native'

const { Screen, Navigator } = createDrawerNavigator()

function Drawer() {
  const { user } = useContext(AuthContext)
  const { colors } = useTheme()

  return (
    <Navigator
      initialRouteName="Dashboard"
      drawerContentOptions={{
        activeBackgroundColor: '#bbe',
      }}
      drawerStyle={{
        backgroundColor: colors.primary,
      }}>
      <Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          drawerLabel: () => (
            <Text testID="dashboard" style={{ color: colors.secondary }}>
              {' '}
              Dashboard{' '}
            </Text>
          ),
          drawerIcon: () =>
            user?.photoURL ? (
              <Avatar.Image source={{ uri: user?.photoURL }} />
            ) : (
              <Avatar.Icon icon="account" />
            ),
        }}
      />
      <Screen
        name="Settings"
        component={Settings}
        options={{
          drawerLabel: () => (
            <Text testID="settings" style={{ color: colors.secondary }}>
              {' '}
              Settings{' '}
            </Text>
          ),
          drawerIcon: () => (
            <Avatar.Icon icon="saw-blade" color={colors.secondary} />
          ),
        }}
      />
    </Navigator>
  )
}

export default Drawer
