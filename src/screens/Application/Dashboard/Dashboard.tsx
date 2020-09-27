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

const width = Dimensions.get('screen').width

export default function Dashboard() {
  const { tasks } = useContext(TaskContext)
  const { colors, images } = useTheme()
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>()

  function openDrawer() {
    navigation.openDrawer()
  }

  function checkTodayTask() {
    return tasks.find((task) => task.Date.getDate() === new Date().getDate())
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
              <View style={styles.imgView}>
                <Text style={[styles.notTaskText, { color: colors.text }]}>
                  No tasks for today
                </Text>
                <images.notfound
                  width={width / 1.5}
                  height={width / 1.5}
                  testID="img"
                />
                <Button
                  text="Add one"
                  big
                  onPress={() => navigation.navigate('AddTask')}
                />
              </View>
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

  imgView: {
    alignItems: 'center',
  },

  notTaskText: {
    fontSize: 20,
    fontFamily: 'Roboto-Light',
  },
})
