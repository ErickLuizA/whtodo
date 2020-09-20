import 'react-native-gesture-handler'
import React from 'react'

import Screens from './routes/index'
import ThemeProvider from './context/ThemeContext'

const App = () => {
  return (
    <ThemeProvider>
      <Screens />
    </ThemeProvider>
  )
}

export default App
