import React, {useState} from 'react'
import {View, Text, Dimensions, StyleSheet} from 'react-native'
import Container from '../components/Container'
import Auth from '../../assets/auth.svg'
import {
  Paragraph,
  Snackbar,
  TextInput,
  Title,
  useTheme,
} from 'react-native-paper'
import {TouchableOpacity} from 'react-native-gesture-handler'
import {useNavigation} from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import Icon from 'react-native-vector-icons/MaterialIcons'

const width = Dimensions.get('screen').width

export default function Forgot() {
  const {colors} = useTheme()
  const navigation = useNavigation()

  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const [visible, setVisible] = useState(false)

  function handleNavigation() {
    navigation.navigate('Register')
  }

  async function handleSubmit() {
    setError('')

    if (email.length === 0) {
      return setError('Please enter a valid e-mail')
    }

    try {
      await auth().sendPasswordResetEmail(email)
      toggleSnackBar()
      setInterval(() => navigation.navigate('Login'), 3000)
    } catch (e) {
      setError('Please enter a valid e-mail')
    }
  }

  function toggleSnackBar() {
    setVisible((state) => !state)
  }

  return (
    <Container>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Icon name="keyboard-backspace" size={60} color={colors.secondary} />
      </TouchableOpacity>
      <Auth width={width / 1.25} height={width / 1.3} />
      <Title style={[styles.title, {color: colors.secondary}]}>
        Forgot your password?
      </Title>
      <Paragraph style={[styles.text, {color: colors.text}]}>
        We just need your registered e-mail to send you password reset
        instructions
      </Paragraph>
      <TextInput
        value={email}
        error={Boolean(error)}
        textContentType="emailAddress"
        onChangeText={(text) => setEmail(text)}
        label="Enter your e-mail"
        mode="flat"
        style={styles.input}
      />
      {Boolean(error) && <Text style={styles.error}>{error}</Text>}
      <TouchableOpacity
        onPress={handleSubmit}
        style={[styles.button, {backgroundColor: colors.primary}]}>
        <Text style={styles.buttonText}>RESET PASSWORD</Text>
      </TouchableOpacity>
      <View style={styles.row}>
        <Text style={[styles.registerText, {color: colors.text}]}>
          Don't have a account?
        </Text>
        <TouchableOpacity onPress={handleNavigation}>
          <Text style={[{color: colors.secondary}, styles.register]}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
      <Snackbar visible={visible} onDismiss={toggleSnackBar}>
        Go check your e-mail!
      </Snackbar>
    </Container>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Roboto-Light',
    fontSize: 26,
    paddingHorizontal: 10,
  },

  input: {
    width: width / 1.25,
    backgroundColor: '#fafafa',
    marginVertical: 20,
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
    fontFamily: 'Roboto-Light',
    fontSize: 18,
    width: width / 1.5,
    marginVertical: 15,
  },

  registerText: {
    fontFamily: 'Roboto-Light',
    fontSize: 18,
    marginVertical: 15,
    paddingRight: 5,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  register: {
    fontFamily: 'Roboto-Italic',
  },

  error: {
    color: '#f00',
    textAlign: 'left',
    width: width / 1.25,
  },

  backButton: {width: width / 1.1, alignItems: 'flex-start'},
})
