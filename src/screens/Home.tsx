import React from 'react'
import {View, Text, Image} from 'react-native'
import {useTheme} from 'react-native-paper'

export default function Home() {
  const {colors} = useTheme()

  return (
    <View style={{backgroundColor: 'red', flex: 1}}>
      <Text> Hello World </Text>
    </View>
  )
}
