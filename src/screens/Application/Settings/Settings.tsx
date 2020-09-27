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
import { ThemeContext } from '../../../context/ThemeContext'

const width = Dimensions.get('screen').width

export default function Settings() {
  const { signOut } = useContext(AuthContext)
  const { dark, toggle } = useContext(ThemeContext)
  const { colors } = useTheme()
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>()

  function handleNavigation() {
    navigation.navigate('Account')
  }

  function openDrawer() {
    navigation.openDrawer()
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity testID="menu" style={styles.menu} onPress={openDrawer}>
        <Icon name="subject" size={60} color={colors.secondary} />
      </TouchableOpacity>
      <Container>
        <TouchableOpacity
          onPress={handleNavigation}
          style={[{ backgroundColor: colors.primary }, styles.button]}
          testID="account">
          <Icon name="account-box" size={40} color={colors.secondary} />

          <Text style={[styles.buttonText, { color: colors.secondary }]}>
            Account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={toggle}
          style={[{ backgroundColor: colors.primary }, styles.button]}
          testID="theme">
          {dark ? (
            <Icon name="brightness-7" size={40} color={colors.secondary} />
          ) : (
            <Icon name="brightness-3" size={40} color={colors.secondary} />
          )}

          <Text style={[styles.buttonText, { color: colors.secondary }]}>
            Theme
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={signOut}
          style={[{ backgroundColor: colors.primary }, styles.button]}
          testID="logout">
          <Icon name="logout" size={40} color={colors.secondary} />
          <Text style={[styles.buttonText, { color: colors.secondary }]}>
            Logout
          </Text>
        </TouchableOpacity>
      </Container>
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
