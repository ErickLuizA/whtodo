import React, {createContext, useEffect, useState} from 'react'
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native'
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper'
import AsyncStorage from '@react-native-community/async-storage'

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    background: '#EAEAFA',
    primary: '#aad',
    secondary: '#575A89',
    text: '#333',
    grayText: '#777777',
  },
}
const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
    background: '#15202B',
    primary: '#aad',
    secondary: '#575A89',
    text: '#F9F9F9',
    grayText: '#777777',
  },
}

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      secondary: string
    }
  }
}

interface ContextProps {
  dark: boolean
  toggle: () => void
}

export const ThemeContext = createContext({} as ContextProps)

const ThemeProvider: React.FC = ({children}) => {
  const [dark, setDark] = useState(false)

  const theme = dark ? CombinedDarkTheme : CombinedDefaultTheme

  useEffect(() => {
    ;(async () => {
      const storagedTheme = await AsyncStorage.getItem('@RNTheme')

      if (storagedTheme === 'dark') {
        setDark(true)
      } else {
        setDark(false)
      }
    })()
  }, [dark])

  async function toggle() {
    if (dark) {
      await AsyncStorage.setItem('@RNTheme', 'light')
    } else {
      await AsyncStorage.setItem('@RNTheme', 'dark')
    }
    setDark((state) => !state)
  }

  return (
    <ThemeContext.Provider value={{dark, toggle}}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>{children}</NavigationContainer>
      </PaperProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
