import firestore from '@react-native-firebase/firestore'

interface updateTaskProps {
  user?: string
  star: boolean
  notifications: boolean
  task: string
}

export default async function updateTask({
  user,
  star,
  notifications,
  task,
}: updateTaskProps) {
  const colRef = firestore().collection('Users').doc(user).collection('Tasks')
  const tasks = await colRef.where('Name', '==', task).get()

  tasks.forEach((t) => {
    colRef.doc(t.id).update({
      Starred: star,
      Notification: notifications,
    })
  })
}
