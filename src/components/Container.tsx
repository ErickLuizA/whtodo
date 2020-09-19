import React from 'react'
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native'
import {useTheme} from 'react-native-paper'

const Container: React.FC = ({children}) => {
  const {colors} = useTheme()

  return (
    <SafeAreaView
      style={[{backgroundColor: colors.background}, styles.container]}>
      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
    flex: 1,
  },
})

export default Container
