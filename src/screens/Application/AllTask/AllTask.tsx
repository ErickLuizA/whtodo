import React, { useContext, useEffect, useState } from 'react'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { Dimensions, StatusBar, StyleSheet, Text, View } from 'react-native'
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler'
import { useTheme } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Container from '../../../components/Container'
import Progress from '../../../components/Progress'
import { AuthContext } from '../../../context/AuthContext'
import firestore from '@react-native-firebase/firestore'
import { ITask } from '../../../components/task'
import TaskCard from '../../../components/TaskCard'

const width = Dimensions.get('screen').width

export default function AllTask() {
  const { user } = useContext(AuthContext)
  const { colors } = useTheme()
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>()

  const [tasks, setTasks] = useState<ITask[]>([])
  const [categories, setCategories] = useState<string[]>([])

  const [openCategoryModal, setOpenCategoryModal] = useState<string[]>([])

  useEffect(() => {
    const colRef = firestore().collection('Users')

    ;(async () => {
      const userDoc = colRef.doc(user?.uid)

      const taskDoc = await userDoc.collection('Tasks').get()

      let taskArray: any = []
      let categoryArray: any = []

      taskDoc.forEach((snapshot) => {
        let data = snapshot.data()
        data.Date = data.Date.toDate()
        taskArray.push(data)
        categoryArray.push(data.Category)
      })

      setTasks(taskArray)
      setCategories(categoryArray)
    })()
  }, [user])

  function openDrawer() {
    navigation.openDrawer()
  }

  function handleDropdown(category: string) {
    if (checkIfExist(category)) {
      setOpenCategoryModal((prev) => prev.filter((p) => p !== category))
    } else {
      setOpenCategoryModal((prev) => [...prev, category])
    }
  }

  function checkIfExist(category: string): boolean {
    const exist = openCategoryModal.find((c) => c === category)

    return Boolean(exist)
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity testID="menu" style={styles.menu} onPress={openDrawer}>
        <Icon name="subject" size={60} color={colors.secondary} />
      </TouchableOpacity>
      <Progress progressType="All" />
      <Container>
        <Text style={[styles.title, { color: colors.secondary }]}>
          All tasks
        </Text>
        {categories.map((category) => (
          <View key={category}>
            <TouchableHighlight
              style={[{ backgroundColor: colors.primary }, styles.button]}
              underlayColor="#cce"
              onPress={() => handleDropdown(category)}>
              <View style={styles.buttonInside}>
                <Text style={[{ color: colors.secondary }, styles.buttonText]}>
                  {category}
                </Text>
                <Icon
                  name={
                    checkIfExist(category) ? 'arrow-drop-up' : 'arrow-drop-down'
                  }
                  size={30}
                />
              </View>
            </TouchableHighlight>
            {tasks.map((task) => {
              if (checkIfExist(task.Category)) {
                return <TaskCard taskType="All" data={task} key={task.Name} />
              } else {
                return <View />
              }
            })}
          </View>
        ))}
      </Container>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  button: {
    width: width / 1.2,
    paddingVertical: 5,
    marginVertical: 10,
  },

  buttonInside: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  buttonText: {
    fontSize: 18,
    fontFamily: 'Roboto-Light',
  },

  menu: {
    alignSelf: 'flex-start',
    width: width / 1.1,
  },

  container: {
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
    flex: 0.6,
  },

  title: {
    fontSize: 26,
    alignSelf: 'flex-start',
    fontFamily: 'Roboto-Medium',
    marginVertical: 20,
    marginLeft: 10,
  },
})
