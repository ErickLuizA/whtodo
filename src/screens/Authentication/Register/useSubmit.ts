import { FirebaseAuthTypes } from '@react-native-firebase/auth'
import useValidator from './useValidator'

interface IProps {
  name: string
  email: string
  password: string
  setError({}): void
  auth(): FirebaseAuthTypes.Module
}

const useSubmit = async ({ name, email, password, setError, auth }: IProps) => {
  const valid = useValidator({ name, email, password, setError })

  if (!valid) {
    return
  }

  try {
    const createdUser = await auth().createUserWithEmailAndPassword(
      email,
      password,
    )

    await createdUser.user.updateProfile({
      displayName: name,
    })
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
