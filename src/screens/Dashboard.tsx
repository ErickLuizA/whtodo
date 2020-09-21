import React, {useContext} from 'react'
import {View, Text} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'
import Container from '../components/Container'
import {AuthContext} from '../context/AuthContext'

export default function Dashboard() {
  const {signOut, user} = useContext(AuthContext)

  return (
    <Container>
      <View>
        <Text>Hello {user?.displayName} </Text>
        <TouchableOpacity onPress={signOut}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </Container>
  )
}
