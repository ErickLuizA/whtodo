import React from 'react'
import {View, Text, Image} from 'react-native'
import {useTheme} from 'react-native-paper'
import Container from '../components/Container'

export default function Home() {
  const {colors} = useTheme()

  return (
    <Container>
      <Text> Hello World </Text>
    </Container>
  )
}
