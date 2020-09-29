import { DrawerNavigationProp } from '@react-navigation/drawer'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text } from 'react-native'
import Container from '../../../components/Container'
import UpperProfile from '../../../components/UpperProfile'

interface AccountProps {}

export default function Account({}: AccountProps) {
  const { goBack, navigate } = useNavigation<
    DrawerNavigationProp<ParamListBase>
  >()

  const open = () => {
    goBack()
  }

  const openPhoto = () => {
    navigate('PhotoModal')
  }

  return (
    <>
      <UpperProfile openPhoto={openPhoto} account openDrawer={open} />
      <Container>
        <Text> Hello Account </Text>
      </Container>
    </>
  )
}
