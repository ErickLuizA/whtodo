import * as React from 'react'
import { Dimensions, StyleSheet, View, Text } from 'react-native'
import { useTheme } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { ITask } from '../context/TaskContext'

const width = Dimensions.get('screen').width

interface ITaskCard {
  taskType: string
  data: ITask
}

const TaskCard: React.FC<ITaskCard> = ({ taskType, data }) => {
  const { colors } = useTheme()
  return (
    <View style={styles.container} testID="cardContainer">
      {data && (
        <View style={[styles.card, { backgroundColor: colors.primary }]}>
          <Text style={[{ color: colors.text }, styles.title]}>
            {' '}
            {data?.Name}{' '}
          </Text>
          <Text style={[{ color: colors.secondary }, styles.category]}>
            {' '}
            {data?.Category}{' '}
          </Text>
          <View style={styles.row}>
            {taskType === 'Daily' ? (
              <Text style={[{ color: colors.secondary }, styles.hour]}>
                {' '}
                {data.Date.toLocaleTimeString().slice(0, 5)}{' '}
              </Text>
            ) : (
              <Text style={[{ color: colors.secondary }, styles.date]}>
                {' '}
                {data.Date.toLocaleDateString()}{' '}
              </Text>
            )}
            <Icon
              name={
                data.Date.toLocaleTimeString() > '18'
                  ? 'brightness-3'
                  : 'brightness-7'
              }
              color={colors.secondary}
              style={styles.icon}
              size={40}
            />
          </View>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
  },

  card: {
    width: width / 1.3,
    paddingVertical: 10,
    padding: 10,
    borderRadius: 5,
  },

  title: {
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
  },

  category: {
    fontSize: 18,
    fontFamily: 'Roboto-Light',
  },

  icon: {
    alignSelf: 'flex-end',
  },

  hour: {
    fontSize: 18,
    fontFamily: 'Roboto-LightItalic',
  },

  date: {
    fontSize: 18,
    fontFamily: 'Roboto-LightItalic',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

export default TaskCard
