import React, { useLayoutEffect, useState } from 'react'
import { AppRoutesParamList } from '../../../routes/App.routes'
import { TextInput, Dimensions, View, StyleSheet } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import Header from '../../../components/Header'

type TaskScreenNavigationProps = StackNavigationProp<AppRoutesParamList, 'Task'>

const height = Dimensions.get('screen').height

type Props = {
  navigation: TaskScreenNavigationProps
}

export default function Task({ navigation }: Props) {
  const [value, setValue] = useState('')

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleCheck = () => {
    navigation.navigate('AddTask', { result: value })
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <Header handleCheck={handleCheck} />,
    })
  }, [handleCheck, navigation])

  return (
    <View>
      <TextInput
        style={styles.textInput}
        multiline
        autoFocus
        value={value}
        onChangeText={(text) => setValue(text)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: { fontSize: 26, height: height, textAlignVertical: 'top' },
})
