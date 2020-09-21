import React, {useContext} from 'react'
import {Text, StyleSheet, Dimensions} from 'react-native'
import Container from '../components/Container'
import {AuthContext} from '../context/AuthContext'
import {useTheme} from 'react-native-paper'
import UpperProfile from '../components/UpperProfile'

const width = Dimensions.get('screen').width

export default function Dashboard() {
  const {user} = useContext(AuthContext)
  const {colors} = useTheme()

  function openDrawer() {
    console.log('open')
  }

  return (
    <>
      <UpperProfile openDrawer={openDrawer} />
      <Container>
        <Text>Hello</Text>
      </Container>
    </>
  )
}

const styles = StyleSheet.create({})
