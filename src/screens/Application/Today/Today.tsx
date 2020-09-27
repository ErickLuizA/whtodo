import { DrawerNavigationProp } from '@react-navigation/drawer'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import React, { useContext } from 'react'
import { Dimensions, StatusBar, StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useTheme } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Container from '../../../components/Container'
import { AuthContext } from '../../../context/AuthContext'

const width = Dimensions.get('screen').width

export default function Today() {
  const { user } = useContext(AuthContext)
  const { colors } = useTheme()
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>()

  function openDrawer() {
    navigation.openDrawer()
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity testID="menu" style={styles.menu} onPress={openDrawer}>
        <Icon name="subject" size={60} color={colors.secondary} />
      </TouchableOpacity>
      <Text>Today</Text>
      <Container />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  button: {
    width: width / 1.2,
    paddingVertical: 15,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 18,
    fontFamily: 'Roboto-Light',
  },

  menu: {
    alignSelf: 'flex-start',
    width: width / 1.1,
  },

  container: {
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
    flex: 0.6,
  },
})
