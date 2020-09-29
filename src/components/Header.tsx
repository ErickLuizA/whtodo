import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { useTheme } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

interface IProps {
  handleCheck(): void
}

export default function Header({ handleCheck }: IProps) {
  const { colors } = useTheme()

  return (
    <View style={[styles.container, { backgroundColor: colors.primary }]}>
      <TouchableOpacity onPress={handleCheck}>
        <Icon name="check" size={40} color={colors.secondary} />
      </TouchableOpacity>
      {/* <TouchableOpacity>
        <Icon name="reply" size={40} color={colors.secondary} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="share" size={40} color={colors.secondary} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="format-title" size={40} color={colors.secondary} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="brush" size={40} color={colors.secondary} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="eraser" size={40} color={colors.secondary} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="dots-vertical" size={40} color={colors.secondary} />
      </TouchableOpacity> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    elevation: 10,
  },
})
