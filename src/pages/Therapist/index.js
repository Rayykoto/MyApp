import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HomeProfile, NewsItem, RatedTherapist, TherapistCategory } from '../../components'
import { DummyTherapist } from '../../assets'
import { colors, fonts } from '../../utils'

const Therapist = () => {
  return (
    <View style={styles.page}>
      <HomeProfile />
      <Text style={styles.welcome}>Mau Konsultasi Dengan Siapa Hari ini?</Text>
      <TherapistCategory />
      <TherapistCategory />
      <TherapistCategory />
      <TherapistCategory />
      <Text>Top Rated Therapist</Text>
      <RatedTherapist />
      <RatedTherapist />
      <RatedTherapist />
      <Text>Good News</Text>
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </View>
  )
}

export default Therapist

const styles = StyleSheet.create({
  page: {
    paddingVertical:30,
    paddingHorizontal:16,
  },
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 209
  }
})