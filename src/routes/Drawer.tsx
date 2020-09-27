import React, { useContext } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Dashboard from '../screens/Application/Dashboard'
import { AuthContext } from '../context/AuthContext'
import { Avatar, useTheme } from 'react-native-paper'
import Settings from '../screens/Application/Settings'
import { Text } from 'react-native'
import AddTask from '../screens/Application/AddTask'
import Starred from '../screens/Application/Starred'
import Today from '../screens/Application/Today'
import InProgress from '../screens/Application/InProgress'
import AllTask from '../screens/Application/AllTask'

const { Screen, Navigator } = createDrawerNavigator()

function Drawer() {
  const { user } = useContext(AuthContext)
  const { colors } = useTheme()

  return (
    <Navigator
      initialRouteName="Dashboard"
      drawerContentOptions={{
        activeBackgroundColor: colors.activeDrawer,
      }}
      drawerStyle={{
        backgroundColor: colors.drawerBackground,
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
        name="Starred"
        component={Starred}
        options={{
          drawerLabel: () => (
            <Text testID="starred" style={{ color: colors.secondary }}>
              {' '}
              Starred{' '}
            </Text>
          ),
          drawerIcon: () => (
            <Avatar.Icon icon="star-outline" color={colors.secondary} />
          ),
        }}
      />
      <Screen
        name="Today"
        component={Today}
        options={{
          drawerLabel: () => (
            <Text testID="today" style={{ color: colors.secondary }}>
              {' '}
              Today{' '}
            </Text>
          ),
          drawerIcon: () => (
            <Avatar.Icon icon="calendar-check" color={colors.secondary} />
          ),
        }}
      />
      <Screen
        name="AllTask"
        component={AllTask}
        options={{
          drawerLabel: () => (
            <Text testID="allTask" style={{ color: colors.secondary }}>
              {' '}
              All Tasks{' '}
            </Text>
          ),
          drawerIcon: () => (
            <Avatar.Icon icon="file-document" color={colors.secondary} />
          ),
        }}
      />
      <Screen
        name="InProgress"
        component={InProgress}
        options={{
          drawerLabel: () => (
            <Text testID="inProgress" style={{ color: colors.secondary }}>
              {' '}
              In Progress{' '}
            </Text>
          ),
          drawerIcon: () => (
            <Avatar.Icon icon="progress-clock" color={colors.secondary} />
          ),
        }}
      />
      <Screen
        name="AddTask"
        component={AddTask}
        options={{
          drawerLabel: () => (
            <Text testID="addTask" style={{ color: colors.secondary }}>
              {' '}
              Add Task{' '}
            </Text>
          ),
          drawerIcon: () => (
            <Avatar.Icon icon="plus" color={colors.secondary} />
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
