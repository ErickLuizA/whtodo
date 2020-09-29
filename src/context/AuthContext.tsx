import React, { createContext, useEffect, useState } from 'react'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'

interface AuthContextProps {
  signed: boolean
  user: FirebaseAuthTypes.User | null
  signOut: () => void
  loading: boolean
  load: () => void
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    auth().onAuthStateChanged((userState) => {
      if (userState) {
        setUser(userState)
      } else {
        setUser(null)
      }
      setLoading(false)
    })
  }, [loading])

  async function signOut() {
    await auth().signOut()
  }

  function load() {
    setLoading(true)
  }

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), user, signOut, loading, load }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
