import { FirebaseAuthTypes } from '@react-native-firebase/auth'
import useValidator from './useValidator'

interface IProps {
  email: string
  password: string
  setError({}): void
  auth(): FirebaseAuthTypes.Module
}

const useSubmit = async ({ email, password, setError, auth }: IProps) => {
  const valid = useValidator({ email, password, setError })

  if (!valid) {
    return
  }

  try {
    await auth().signInWithEmailAndPassword(email, password)
  } catch (e) {
    if (/email/.test(e.code)) {
      setError({
        nameError: '',
        emailError: 'Please enter a valid e-mail',
        passwordError: '',
      })
    }

    if (/password/.test(e.code)) {
      setError({
        nameError: '',
        emailError: '',
        passwordError: 'Please enter a valid password',
      })
    }
  }
}

export default useSubmit
