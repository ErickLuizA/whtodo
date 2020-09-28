import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { useTheme } from 'react-native-paper'
import Button from './Button'

interface NotFoundProps {
  onPress: () => void
  label: string
}

const { width } = Dimensions.get('screen')

const styles = StyleSheet.create({
  imgView: {
    alignItems: 'center',
  },

  notTaskText: {
    fontSize: 20,
    fontFamily: 'Roboto-Light',
  },
})

export default function NotFound({ onPress, label }: NotFoundProps) {
  const { images, colors } = useTheme()

  return (
    <View style={styles.imgView}>
      <Text style={[styles.notTaskText, { color: colors.text }]}>
        No task found
      </Text>
      <images.notfound width={width / 1.5} height={width / 1.5} testID="img" />
      <Button text={label} big onPress={onPress} />
    </View>
  )
}
