import React, { useContext } from 'react'
import { Text, StyleSheet, Dimensions, View } from 'react-native'
import Container from '../components/Container'
import { AuthContext } from '../context/AuthContext'
import { useTheme } from 'react-native-paper'
import UpperProfile from '../components/UpperProfile'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import Progress from '../components/Progress'
import TaskCard from '../components/TaskCard'

const width = Dimensions.get('screen').width

export default function Dashboard() {
  const { user } = useContext(AuthContext)
  const { colors } = useTheme()
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>()

  function openDrawer() {
    navigation.openDrawer()
  }

  return (
    <>
      <UpperProfile openDrawer={openDrawer} />
      <Container>
        <View style={styles.flex}>
          <Progress progressType="Daily" />
          <Text style={[{ color: colors.secondary }, styles.text]}>
            {' '}
            Daily Tasks
          </Text>
          <TaskCard taskType="Daily" />
        </View>
      </Container>
    </>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 26,
    alignSelf: 'flex-start',
    marginVertical: 20,
    marginLeft: 10,
  },

  flex: { flex: 1 },
})
