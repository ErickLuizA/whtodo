import React from 'react'
import {Text, StyleSheet} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'
import Container from '../components/Container'
import {useNavigation} from '@react-navigation/native'
import {useTheme} from 'react-native-paper'

export default function Login() {
  const {colors} = useTheme()
  const navigation = useNavigation()

  function handleForgotPass() {
    navigation.navigate('Forgot')
  }
  return (
    <Container>
      <Text>Hello Login</Text>
      <TouchableOpacity onPress={handleForgotPass}>
        <Text style={[styles.forgot, {color: colors.secondary}]}>
          Forgot your password?
        </Text>
      </TouchableOpacity>
    </Container>
  )
}

const styles = StyleSheet.create({
  forgot: {
    fontFamily: 'Roboto-MediumItalic',
  },
})
