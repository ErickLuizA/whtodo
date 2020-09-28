import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Appbar, useTheme } from 'react-native-paper'

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

  const navigation = useNavigation<NavigationProp<ParamListBase>>()

  return (
    <Appbar.Header
      style={[styles.container, { backgroundColor: colors.secondary }]}>
      <Appbar.BackAction onPress={toggle} size={30} color={colors.primary} />
      <View style={styles.row}>
        <Appbar.Action
          icon="pencil"
          color={colors.primary}
          onPress={() => navigation.navigate('Task', { action: location })}
        />
        <Appbar.Action
          icon="bell"
          color={colors.primary}
          onPress={() => console.log('Pressed mail')}
        />
        <Appbar.Action
          icon="star-outline"
          color={colors.primary}
          onPress={() => console.log('Pressed label')}
        />
        <Appbar.Action
          icon="delete"
          color={colors.primary}
          onPress={() => console.log('Pressed delete')}
        />
      </View>
    </Appbar.Header>
  )
}
