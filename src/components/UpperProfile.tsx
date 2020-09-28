import { SafeAreaView } from 'react-native-safe-area-context'
import { AuthContext } from '../context/AuthContext'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Avatar, useTheme } from 'react-native-paper'
import React, { useContext } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native'

const width = Dimensions.get('screen').width

interface IProps {
  openDrawer: () => void
}

const UpperProfile: React.FC<IProps> = ({ openDrawer }) => {
  const { user } = useContext(AuthContext)
  const { colors } = useTheme()

  return (
    <SafeAreaView
      testID="profileContainer"
      style={[{ backgroundColor: colors.profileBackground }, styles.container]}>
      <TouchableOpacity testID="menu" style={styles.menu} onPress={openDrawer}>
        <Icon name="subject" size={60} color={colors.secondary} />
      </TouchableOpacity>
      <View style={styles.avatarContainer}>
        {user?.photoURL ? (
          <Avatar.Image
            source={{ uri: user?.photoURL }}
            size={80}
            style={styles.avatar}
          />
        ) : (
          <Avatar.Icon icon="account" size={80} style={styles.avatar} />
        )}
        <Text style={[styles.text, { color: colors.text }]} testID="hello">
          Hello,{' '}
          <Text style={[styles.text, { color: colors.secondary }]}>
            {user?.displayName}
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
  },

  menu: {
    alignSelf: 'flex-start',
    width: width / 1.1,
  },

  avatarContainer: {
    alignSelf: 'center',
    paddingTop: 20,
  },

  avatar: {
    alignSelf: 'center',
  },

  text: {
    fontFamily: 'Roboto-Light',
    fontSize: 18,
    padding: 10,
  },
})

export default UpperProfile
