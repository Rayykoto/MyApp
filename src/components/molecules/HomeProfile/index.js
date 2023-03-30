import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TherapistCategory from '../TherapistCategory'
import RatedTherapist from '../RatedTherapist'
import NewsItem from '../NewsItem'

const HomeProfile = () => {
  return (
    <View style={styles.page}>
      <Text>Mau Konsultasi Dengan Siapa Hari ini?</Text>
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

export default HomeProfile

const styles = StyleSheet.create({
  page: {paddingVertical:30, paddingHorizontal:16}
})