import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { Appbar, useTheme } from 'react-native-paper'
import { AuthContext } from '../context/AuthContext'
import deleteTask from '../screens/Application/utils/deleteTask'
import updateTask from '../screens/Application/utils/updateTask'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },

  row: {
    flexDirection: 'row',
  },
})

interface AppBarProps {
  task: string
  toggle: () => void
  location: string
}

export default function AppBar({ task, toggle, location }: AppBarProps) {
  const { colors } = useTheme()
  const { user } = useContext(AuthContext)

  const navigation = useNavigation<NavigationProp<ParamListBase>>()

  return (
    <Appbar.Header
      style={[styles.container, { backgroundColor: colors.secondary }]}>
      <Appbar.BackAction onPress={toggle} size={30} color={colors.primary} />
      <View style={styles.row}>
        <Appbar.Action
          icon="pencil"
          color={colors.primary}
          onPress={() =>
            navigation.navigate('Task', { action: location, task })
          }
        />
        <Appbar.Action
          icon="bell"
          color={colors.primary}
          onPress={() =>
            updateTask({
              user: user?.uid,
              star: false,
              notifications: true,
              task,
            })
          }
        />
        <Appbar.Action
          icon="star-outline"
          color={colors.primary}
          onPress={() =>
            updateTask({
              user: user?.uid,
              star: true,
              notifications: false,
              task,
            })
          }
        />
        <Appbar.Action
          icon="delete"
          color={colors.primary}
          onPress={() =>
            deleteTask({
              user: user?.uid,
              task,
            })
          }
        />
      </View>
    </Appbar.Header>
  )
}
