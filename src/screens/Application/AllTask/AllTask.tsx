import React, { useContext, useEffect, useState } from 'react'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { Dimensions, StatusBar, StyleSheet, Text } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { List, useTheme } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Container from '../../../components/Container'
import Progress from '../../../components/Progress'
import TaskCard from '../../../components/TaskCard'
import { ITask, TaskContext } from '../../../context/TaskContext'
import useOpenBar from '../../../hooks/useOpenBar'
import AppBar from '../../../components/AppBar'

const width = Dimensions.get('screen').width

export default function AllTask() {
  const { tasks } = useContext(TaskContext)
  const { colors } = useTheme()
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>()

  const [allTasks, setAllTasks] = useState<ITask[]>([])
  const [categories, setCategories] = useState<string[]>([])

  const { open, closeBar, openAppBar } = useOpenBar()

  useEffect(() => {
    setAllTasks(tasks)
    let array: string[] = []

    tasks.forEach((t) => {
      if (!array.includes(t.Category)) {
        array.push(t.Category)
      }
    })
    setCategories(array)
  }, [tasks])

  function openDrawer() {
    navigation.openDrawer()
  }

  return (
    <SafeAreaView style={styles.container}>
      {Boolean(open) && (
        <AppBar location="AllTask" task={open} toggle={closeBar} />
      )}
      <TouchableOpacity testID="menu" style={styles.menu} onPress={openDrawer}>
        <Icon name="subject" size={60} color={colors.secondary} />
      </TouchableOpacity>
      <Progress progressType="All" tasks={allTasks} />
      <Container>
        <Text style={[styles.title, { color: colors.secondary }]}>
          All tasks
        </Text>
        <ScrollView>
          {categories.map((cat) => (
            <List.Accordion
              left={() => (
                <Text style={[{ color: colors.secondary }, styles.listText]}>
                  {' '}
                  {cat}{' '}
                </Text>
              )}
              titleStyle={styles.titleStyle}
              key={cat}
              style={[
                styles.listAccordion,
                { backgroundColor: colors.primary },
              ]}
              title={cat}>
              {allTasks.map((t) => {
                if (t.Category === cat) {
                  return (
                    <TaskCard openAppBar={openAppBar} taskType="All" data={t} />
                  )
                }
              })}
            </List.Accordion>
          ))}
        </ScrollView>
      </Container>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  titleStyle: {
    display: 'none',
  },

  listAccordion: {
    marginVertical: 10,
    width: width / 1.25,
  },

  listText: {
    fontSize: 20,
    fontFamily: 'Roboto-Light',
  },

  menu: {
    alignSelf: 'flex-start',
    width: width / 1.1,
  },

  container: {
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
    flex: 1,
  },

  title: {
    fontSize: 26,
    alignSelf: 'flex-start',
    fontFamily: 'Roboto-Medium',
    marginVertical: 10,
    marginLeft: 10,
  },
})
