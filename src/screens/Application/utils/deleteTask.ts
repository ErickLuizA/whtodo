import firestore from '@react-native-firebase/firestore'

interface DeleteTaskProps {
  user?: string
  task: string
}

export default async function deleteTask({ user, task }: DeleteTaskProps) {
  const colRef = firestore().collection('Users').doc(user).collection('Tasks')
  const tasks = await colRef.where('Name', '==', task).get()

  tasks.forEach((t) => {
    colRef.doc(t.id).delete()
  })
}
