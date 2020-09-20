import React from 'react'
import {Text, Dimensions, StyleSheet} from 'react-native'
import {useTheme, TouchableRipple} from 'react-native-paper'
import Container from '../components/Container'

import PhoneMan from '../../assets/phoneman.svg'
import {useNavigation} from '@react-navigation/native'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Home() {
  const {colors} = useTheme()
  const navigation = useNavigation()

  function handleNavigation(props: string) {
    navigation.navigate(props)
  }

  return (
    <Container>
      <PhoneMan width={width / 1.5} height={width / 1.5} />
      <Text style={[{color: colors.text}, styles.text]}>
        {' '}
        Now you know
        <Text style={[{color: colors.secondary}, styles.italicText]}>
          {' '}
          whtodo{' '}
        </Text>
      </Text>
      <TouchableRipple
        onPress={() => handleNavigation('Login')}
        style={[styles.button, {backgroundColor: colors.primary}]}>
        <Text style={[styles.buttonText, {color: colors.secondary}]}>
          LOGIN
        </Text>
      </TouchableRipple>
      <TouchableRipple
        onPress={() => handleNavigation('Register')}
        style={[styles.button, {backgroundColor: colors.primary}]}>
        <Text style={[styles.buttonText, {color: colors.secondary}]}>
          REGISTER
        </Text>
      </TouchableRipple>
    </Container>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 20,
    width: width / 1.5,
    marginVertical: 10,
  },

  buttonText: {
    fontFamily: 'Roboto-Medium',
    textAlign: 'center',
  },

  text: {
    fontSize: 24,
    marginVertical: height / 16,
    fontFamily: 'Roboto-Regular',
  },

  italicText: {
    fontFamily: 'Roboto-LightItalic',
  },
})
