import React, { useLayoutEffect, useState } from 'react'
import { AppRoutesParamList } from '../../../routes/App.routes'
import { TextInput, Dimensions, View, StyleSheet } from 'react-native'
import Header from '../../../components/Header'
import { RouteProp, useNavigation } from '@react-navigation/native'

type TaskScreenRouteProps = RouteProp<AppRoutesParamList, 'Task'>

const height = Dimensions.get('screen').height

type Props = {
  route: TaskScreenRouteProps
}

export default function Task({ route }: Props) {
  const [value, setValue] = useState('')

  const navigation = useNavigation()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleCheck = () => {
    if (route.params.action === 'new') {
      navigation.navigate('AddTask', { result: value })
    } else {
      navigation.navigate(route.params.action, { result: value })
    }
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
