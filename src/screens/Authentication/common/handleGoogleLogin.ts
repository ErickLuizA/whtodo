import { Alert } from 'react-native'
import Config from 'react-native-config'
import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-community/google-signin'

const handleGoogleLogin = async () => {
  GoogleSignin.configure({
    webClientId: Config.WEB_CLIENT_ID,
  })

  try {
    const { idToken } = await GoogleSignin.signIn()

    const googleCredential = auth.GoogleAuthProvider.credential(idToken)

    await auth().signInWithCredential(googleCredential)
  } catch (e) {
    Alert.alert(e.message)
  }
}

export default handleGoogleLogin
