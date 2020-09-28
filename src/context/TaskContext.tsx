import React, { createContext, useContext, useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore'
import { AuthContext } from './AuthContext'

export interface ITask {
  Name: string
  Category: string
  Date: Date
  Content: string
  Done: boolean
  Starred: boolean
  Progress: number
}

interface ITasks {
  tasks: ITask[]
  load: () => void
}

const TaskContext = createContext({} as ITasks)

const TaskProvider: React.FC = ({ children }) => {
  const { user } = useContext(AuthContext)
  const [tasks, setTasks] = useState<ITask[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const colRef = firestore().collection('Users')

    ;(async () => {
      const userDoc = colRef.doc(user?.uid)

      const taskDoc = await userDoc.collection('Tasks').get()

      userDoc.onSnapshot({ error: (e) => console.log(e) })

      let taskArray: any = []

      taskDoc.forEach((snapshot) => {
        let data = snapshot.data()
        data.Date = data.Date.toDate()
        taskArray.push(data)
      })

      setLoading(false)
      setTasks(taskArray)
    })()
  }, [user, loading])

  function load() {
    setLoading(true)
  }

  return (
    <TaskContext.Provider value={{ tasks, load }}>
      {children}
    </TaskContext.Provider>
  )
}

export { TaskProvider, TaskContext }
