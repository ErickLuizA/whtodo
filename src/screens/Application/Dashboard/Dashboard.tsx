import React, { useContext } from 'react'
import { Text, StyleSheet, View, Dimensions } from 'react-native'
import Container from '../../../components/Container'
import { useTheme } from 'react-native-paper'
import UpperProfile from '../../../components/UpperProfile'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import Progress from '../../../components/Progress'
import TaskCard from '../../../components/TaskCard'
import { TaskContext } from '../../../context/TaskContext'
import Button from '../../../components/Button'
import { ScrollView } from 'react-native-gesture-handler'
import NotFound from '../../../components/NotFound'

const width = Dimensions.get('screen').width

export default function Dashboard() {
  const { tasks } = useContext(TaskContext)
  const { colors } = useTheme()
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>()

  function openDrawer() {
    navigation.openDrawer()
  }

  function checkTodayTask() {
    return tasks.find((task) => task.Date.getDate() === new Date().getDate())
  }

  function getTodayTasks() {
    return tasks.filter((t) => t.Date.getDate() === new Date().getDate())
  }

  return (
    <>
      <UpperProfile openDrawer={openDrawer} />
      <Container>
        <View style={styles.flex}>
          <Progress progressType="Daily" tasks={getTodayTasks()} />
          <Text style={[{ color: colors.secondary }, styles.text]}>
            {' '}
            Daily Tasks
          </Text>
          <ScrollView>
            {checkTodayTask() ? (
              tasks.map((task) => {
                if (task.Date.getDate() === new Date().getDate()) {
                  return (
                    <TaskCard taskType="Daily" data={task} key={task.Name} />
                  )
                }
              })
            ) : (
              <NotFound
                label="Add a task"
                onPress={() => navigation.navigate('AddTask')}
              />
            )}
          </ScrollView>
        </View>
      </Container>
    </>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 26,
    alignSelf: 'flex-start',
    fontFamily: 'Roboto-Medium',

    marginVertical: 20,
    marginLeft: 10,
  },

  flex: { flex: 1 },
})
