import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { DummyTherapist, IconStar } from '../../../assets'
import { colors, fonts } from '../../../utils'

const RatedTherapist = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyTherapist} style={styles.avatar}/>
      <View style={styles.profile}>
        <Text style={styles.name}>Diana Nashiroh</Text>
        <Text style={styles.category}>Kids</Text>
      </View>
      <View style={styles.rate}>
          <IconStar />
          <IconStar />
          <IconStar />
          <IconStar />
          <IconStar />
      </View>
    </View>
  )
}

export default RatedTherapist

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16
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