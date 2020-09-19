import 'react-native-gesture-handler'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import Screens from './routes/index'

const App = () => {
  return (
    <NavigationContainer>
      <Screens />
    </NavigationContainer>
  )
}

export default App
