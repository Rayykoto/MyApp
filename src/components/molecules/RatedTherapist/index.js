import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'
import { IconStar } from '../../../assets'

const RatedTherapist = ({onPress, name, category, avatar}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={avatar} style={styles.avatar}/>
      <View style={styles.profile}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.category}>{category}</Text>
      </View>
      <View style={styles.rate}>
          <IconStar />
          <IconStar />
          <IconStar />
          <IconStar />
          <IconStar />
      </View>
    </TouchableOpacity>
  )
}

export default RatedTherapist

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
    alignItems: 'center'
  },
  profile: {
    flex: 1
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50/2,
    marginRight: 12
  },
  rate: {
    flexDirection: 'row'
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 2,
  }
})