import * as React from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import {Divider, TextInput, Title, useTheme} from 'react-native-paper'
import Container from '../components/Container'

import GoogleIcon from '../../assets/googleIcon.svg'
import {TouchableOpacity} from 'react-native-gesture-handler'
import {useNavigation} from '@react-navigation/native'

const width = Dimensions.get('screen').width

export default function Register() {
  const {colors} = useTheme()
  const navigation = useNavigation()

  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState({
    nameError: '',
    emailError: '',
    passwordError: '',
  })

  function handleNavigation() {
    navigation.navigate('Login')
  }

  function handleSubmit() {
    setError({
      nameError: '',
      emailError: '',
      passwordError: '',
    })
  }

  return (
    <Container>
      <Title style={[styles.title, {color: colors.secondary}]}>
        Create your free account to join us!
      </Title>
      <TouchableOpacity
        style={[
          styles.googleButton,
          {backgroundColor: colors.inputBackground},
        ]}>
        <>
          <GoogleIcon />
          <Text style={[styles.googleButtonText, {color: colors.secondary}]}>
            REGISTER WITH GOOGLE
          </Text>
        </>
      </TouchableOpacity>
      <View style={styles.row}>
        <Divider style={styles.divider} />
        <Text style={[{color: colors.text}, styles.or]}>or</Text>
        <Divider style={styles.divider} />
      </View>
      <TextInput
        value={name}
        error={Boolean(name)}
        onChangeText={(text) => setName(text)}
        label="Enter your name"
        mode="flat"
        style={styles.input}
      />
      {Boolean(error.nameError) && (
        <Text style={styles.error}>{error.nameError}</Text>
      )}
      <TextInput
        value={email}
        error={Boolean(email)}
        onChangeText={(text) => setEmail(text)}
        label="Enter your e-mail"
        mode="flat"
        style={styles.input}
      />
      {Boolean(error.emailError) && (
        <Text style={styles.error}>{error.emailError}</Text>
      )}
      <TextInput
        value={password}
        error={Boolean(password)}
        onChangeText={(text) => setPassword(text)}
        label="Enter your password"
        mode="flat"
        style={styles.input}
      />
      {Boolean(error.passwordError) && (
        <Text style={styles.error}>{error.passwordError}</Text>
      )}

      <TouchableOpacity
        onPress={handleSubmit}
        style={[styles.button, {backgroundColor: colors.primary}]}>
        <Text style={styles.buttonText}>REGISTER</Text>
      </TouchableOpacity>
      <View style={styles.row}>
        <Text style={[styles.text, {color: colors.text}]}>
          Already have a account?
        </Text>
        <TouchableOpacity onPress={handleNavigation}>
          <Text style={[{color: colors.secondary}, styles.login]}> Login</Text>
        </TouchableOpacity>
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Roboto-Light',
    marginBottom: 40,
    fontSize: 26,
    width: width / 1.5,
    marginRight: 'auto',
    paddingHorizontal: 20,
  },

  googleButtonText: {
    fontFamily: 'Roboto-Light',
    fontSize: 18,
  },

  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    marginVertical: 20,
    width: width / 1.25,
    justifyContent: 'space-evenly',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  divider: {
    marginTop: 10,
    marginBottom: 10,
    height: 2,
    width: width / 3,
    marginHorizontal: 10,
  },

  or: {
    fontFamily: 'Roboto-Light',
    fontSize: 18,
    marginBottom: 10,
  },

  input: {
    width: width / 1.25,
    backgroundColor: '#fafafa',
    marginVertical: 10,
  },

  button: {
    paddingVertical: 20,
    width: width / 1.25,
    marginTop: 10,
  },

  buttonText: {
    textAlign: 'center',
    fontFamily: 'Roboto-Light',
    fontSize: 18,
  },

  text: {
    fontFamily: 'Roboto-Regular',
  },

  login: {
    fontFamily: 'Roboto-Italic',
  },
  error: {
    color: '#f00',
    textAlign: 'left',
    width: width / 1.25,
  },
})
