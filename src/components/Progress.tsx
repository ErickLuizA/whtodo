import React, {useState} from 'react'
import {Dimensions, StyleSheet, View} from 'react-native'
import {AnimatedCircularProgress} from 'react-native-circular-progress'
import {useTheme} from 'react-native-paper'
import {Text} from 'react-native'

interface IProgressProps {
  progressType: string
}

const width = Dimensions.get('screen').width

const Progress: React.FC<IProgressProps> = ({progressType}) => {
  const {colors} = useTheme()

  const [progressBar, setProgressBar] = useState(10)

  const [doneTasks, setDoneTasks] = useState(2)
  const [totalTasks, setTotalTasks] = useState(20)

  return (
    <View style={styles.container}>
      <AnimatedCircularProgress
        size={120}
        width={15}
        fill={progressBar}
        rotation={360}
        tintColor={colors.secondary}
        backgroundColor={colors.primary}>
        {(fill) => (
          <Text style={[styles.progressText, {color: colors.secondary}]}>
            {' '}
            {fill}%{' '}
          </Text>
        )}
      </AnimatedCircularProgress>
      <View>
        <Text style={[styles.text, {color: colors.text}]}>
          {' '}
          {progressType} progress{' '}
        </Text>
        <Text style={[styles.taskText, {color: colors.grayText}]}>
          {' '}
          {doneTasks}/{totalTasks} tasks done{' '}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: width / 1.2,
    alignItems: 'center',
  },

  progressText: {
    fontSize: 26,
    fontFamily: 'Roboto-MediumItalic',
  },

  text: {
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
  },

  taskText: {
    fontSize: 18,
  },
})

export default Progress
