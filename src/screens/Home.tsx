import React from 'react'
import {Text, Dimensions, StyleSheet} from 'react-native'
import {useTheme, Button} from 'react-native-paper'
import Container from '../components/Container'

import PhoneMan from '../assets/phoneman.svg'
import {useNavigation} from '@react-navigation/native'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Home() {
  const {colors} = useTheme()
  const {navigate} = useNavigation()

  function handleNavigation(props: string) {
    navigate(props)
  }

  return (
    <Container>
      <PhoneMan width={width / 1.5} />
      <Text style={[{color: colors.text}, styles.text]}>
        {' '}
        Now you know
        <Text style={[{color: colors.secondary}, styles.italicText]}>
          {' '}
          whtodo{' '}
        </Text>
      </Text>
      <Button
        color={colors.primary}
        mode="contained"
        onPress={() => handleNavigation('Login')}
        style={[{backgroundColor: colors.secondary}]}>
        LOGIN
      </Button>
      <Button
        color={colors.primary}
        mode="contained"
        onPress={() => handleNavigation('Register')}
        style={[{backgroundColor: colors.secondary}]}>
        REGISTER
      </Button>
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
    textAlign: 'center',
    fontFamily: 'Roboto-Light',
  },

  text: {
    fontSize: 24,
    marginVertical: height / 16,
    fontFamily: 'Roboto-Medium',
  },

  italicText: {
    fontStyle: 'italic',
    fontFamily: 'Roboto-LightItalic',
  },
})
