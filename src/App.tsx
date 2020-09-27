import 'react-native-gesture-handler'
import React from 'react'

import Screens from './routes/index'
import ThemeProvider from './context/ThemeContext'
import { AuthProvider } from './context/AuthContext'
import { TaskProvider } from './context/TaskContext'

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <TaskProvider>
          <Screens />
        </TaskProvider>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
