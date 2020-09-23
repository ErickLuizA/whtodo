import 'react-native-gesture-handler'
import React from 'react'

import Screens from './routes/index'
import ThemeProvider from './context/ThemeContext'
import { AuthProvider } from './context/AuthContext'

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Screens />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
