import React, {useContext} from 'react'
import {Text, StyleSheet, Dimensions} from 'react-native'
import Container from '../components/Container'
import {AuthContext} from '../context/AuthContext'
import {useTheme} from 'react-native-paper'
import UpperProfile from '../components/UpperProfile'
import {ParamListBase, useNavigation} from '@react-navigation/native'
import {DrawerNavigationProp} from '@react-navigation/drawer'

const width = Dimensions.get('screen').width

export default function Dashboard() {
  const {user} = useContext(AuthContext)
  const {colors} = useTheme()
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>()

  function openDrawer() {
    navigation.openDrawer()
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
