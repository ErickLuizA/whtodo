import React, {useState} from 'react'
import {Dimensions, StyleSheet, View, Text} from 'react-native'
import {Badge, useTheme} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons'

const width = Dimensions.get('screen').width

interface ITaskCard {
  taskType: string
}

const TaskCard: React.FC<ITaskCard> = ({taskType}) => {
  const {colors} = useTheme()
  return (
    <View style={styles.container}>
      {taskType !== 'Daily' && (
        <Badge
          size={30}
          style={[styles.badge, {backgroundColor: colors.secondary}]}>
          21/07
        </Badge>
      )}
      <View style={[styles.card, {backgroundColor: colors.primary}]}>
        <View>
          <Text style={[{color: colors.text}, styles.title]}> Task Name </Text>
          <Text style={[{color: colors.secondary}, styles.category]}>
            {' '}
            Category Name{' '}
          </Text>
        </View>
        <View>
          <Icon name="brightness-3" color={colors.secondary} size={40} />
          <Text style={[{color: colors.secondary}, styles.hour]}> 12:30</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  card: {
    width: width / 1.3,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },

  badge: {
    transform: [{rotate: '270deg'}],
    fontSize: 14,
    alignSelf: 'center',
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
  },

  category: {
    fontSize: 18,
    fontFamily: 'Roboto-Light',
  },

  hour: {
    fontSize: 18,
    fontFamily: 'Roboto-LightItalic',
  },
})

export default TaskCard
