import React, {useContext} from 'react'
import {View, Text} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'
import {AuthContext} from '../context/AuthContext'

export default function Settings() {
  const {signOut} = useContext(AuthContext)
  return (
    <View>
      <TouchableOpacity onPress={signOut}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}
