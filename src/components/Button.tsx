import React from 'react'
import { Dimensions, StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useTheme } from 'react-native-paper'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const styles = StyleSheet.create({
  button: {
    paddingVertical: 20,
    width: width / 1.5,
    marginVertical: 10,
    borderRadius: 5,
  },

  bigButton: {
    paddingVertical: 25,
    width: width / 1.25,
    marginVertical: 10,
    borderRadius: 5,
  },

  buttonText: {
    fontFamily: 'Roboto-Medium',
    textAlign: 'center',
  },
})

interface IButton {
  text: string
  onPress(): void
  big?: boolean
}

const Button = ({ text, onPress, big }: IButton) => {
  const { colors } = useTheme()

  return (
    <TouchableOpacity
      onPress={onPress}
      testID={'button' + text}
      style={[
        big ? styles.bigButton : styles.button,
        { backgroundColor: colors.primary },
      ]}>
      <Text style={[styles.buttonText, { color: colors.secondary }]}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

export default Button
