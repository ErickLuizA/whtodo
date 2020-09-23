import React from 'react'
import { Text, StyleSheet, Dimensions, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Container from '../components/Container'
import { useNavigation } from '@react-navigation/native'
import { Divider, TextInput, Title, useTheme } from 'react-native-paper'
import auth from '@react-native-firebase/auth'
import GoogleIcon from '../../assets/googleIcon.svg'
import { GoogleSignin } from '@react-native-community/google-signin'
import Config from 'react-native-config'

const width = Dimensions.get('screen').width

export default function Login() {
  const { colors } = useTheme()
  const navigation = useNavigation()

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState({
    emailError: '',
    passwordError: '',
  })

  function handleNavigation() {
    navigation.navigate('Register')
  }

  async function handleSubmit() {
    setError({
      emailError: '',
      passwordError: '',
    })

    if (email.length === 0) {
      return setError({
        emailError: 'You need to fill this field',
        passwordError: '',
      })
    }

    if (password.length === 0) {
      return setError({
        emailError: '',
        passwordError: 'You need to fill this field',
      })
    }

    try {
      await auth().signInWithEmailAndPassword(email, password)
    } catch (e) {
      if (/email/.test(e.code)) {
        setError({
          emailError: 'Please enter a valid e-mail',
          passwordError: '',
        })
      }

      if (/password/.test(e.code)) {
        setError({
          emailError: '',
          passwordError: 'Please enter a valid password',
        })
      }
    }
  }

  async function handleGoogleLogin() {
    GoogleSignin.configure({
      webClientId: Config.WEB_CLIENT_ID,
    })

    try {
      const { idToken } = await GoogleSignin.signIn()

      const googleCredential = auth.GoogleAuthProvider.credential(idToken)

      await auth().signInWithCredential(googleCredential)
    } catch (e) {
      console.log(e)
    }
  }

  function handleForgotPass() {
    navigation.navigate('Forgot')
  }

  return (
    <Container>
      <Title
        style={[styles.title, { color: colors.secondary }]}
        testID="loginTitle">
        WELCOME BACK
      </Title>
      <TouchableOpacity
        testID="googleButton"
        onPress={handleGoogleLogin}
        style={[
          styles.googleButton,
          { backgroundColor: colors.inputBackground },
        ]}>
        <>
          <GoogleIcon />
          <Text style={[styles.googleButtonText, { color: colors.secondary }]}>
            LOGIN WITH GOOGLE
          </Text>
        </>
      </TouchableOpacity>
      <View style={styles.row}>
        <Divider style={styles.divider} />
        <Text style={[{ color: colors.text }, styles.or]}>or</Text>
        <Divider style={styles.divider} />
      </View>

      <TextInput
        testID="emailInput"
        value={email}
        error={Boolean(error.emailError)}
        textContentType="emailAddress"
        onChangeText={(text) => setEmail(text)}
        label="Enter your e-mail"
        mode="flat"
        style={styles.input}
      />
      {Boolean(error.emailError) && (
        <Text testID="emailError" style={styles.error}>
          {error.emailError}
        </Text>
      )}
      <TextInput
        testID="passwordInput"
        value={password}
        error={Boolean(error.passwordError)}
        textContentType="password"
        onChangeText={(text) => setPassword(text)}
        label="Enter your password"
        mode="flat"
        style={styles.input}
      />
      {Boolean(error.passwordError) && (
        <Text testID="passwordError" style={styles.error}>
          {error.passwordError}
        </Text>
      )}
      <TouchableOpacity onPress={handleForgotPass} testID="forgotButton">
        <Text style={[styles.forgot, { color: colors.secondary }]}>
          Forgot your password?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        testID="submitLoginButton"
        onPress={handleSubmit}
        style={[styles.button, { backgroundColor: colors.primary }]}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      <View style={styles.row}>
        <Text style={[styles.text, { color: colors.text }]}>
          Don't have a account?
        </Text>
        <TouchableOpacity onPress={handleNavigation} testID="sendToRegister">
          <Text style={[{ color: colors.secondary }, styles.register]}>
            {' '}
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  forgot: {
    fontFamily: 'Roboto-MediumItalic',
    marginVertical: 15,
  },
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
    borderRadius: 5,
  },

  buttonText: {
    textAlign: 'center',
    fontFamily: 'Roboto-Light',
    fontSize: 18,
  },

  text: {
    fontFamily: 'Roboto-Regular',
  },

  register: {
    fontFamily: 'Roboto-Italic',
  },
  error: {
    color: '#f00',
    textAlign: 'left',
    width: width / 1.25,
  },
})
