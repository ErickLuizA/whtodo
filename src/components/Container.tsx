import * as React from 'react'
import { StyleSheet, StatusBar } from 'react-native'
import { useTheme } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

interface IProps {
  upper?: boolean
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  smallContainer: {
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
    flex: 1,
    alignItems: 'center',
  },
})

const Container: React.FC<IProps> = ({ children, upper }) => {
  const { colors } = useTheme()

  return (
    <SafeAreaView
      testID="container"
      style={[
        { backgroundColor: colors.background },
        upper ? styles.smallContainer : styles.container,
      ]}>
      {children}
    </SafeAreaView>
  )
}

export default Container
