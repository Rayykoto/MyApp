import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Gap, HomeProfile, NewsItem, RatedTherapist, TherapistCategory } from '../../components'
import { colors, fonts } from '../../utils'

const Therapist = () => {
  return (
    <View style={styles.page}>
    <View style={styles.content}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.wrapperSection}>
      <Gap height={30} />
      <HomeProfile />
        <Text style={styles.welcome}>Mau Konsultasi Dengan Siapa Hari ini?</Text>
      </View>
        <View style={styles.wrapperScroll}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.category}>
              <Gap width={32} />
              <TherapistCategory />
              <TherapistCategory />
              <TherapistCategory />
              <TherapistCategory />
              <Gap width={22} />
            </View>   
          </ScrollView>
        </View>
        <View style={styles.wrapperSection}>
          <Text style={styles.sectionLabel}>Top Rated Therapist</Text>
            <RatedTherapist />
            <RatedTherapist />
            <RatedTherapist />
          <Text style={styles.sectionLabel}>Good News</Text>
        </View>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <Gap height={30} />
      </ScrollView>
      </View>
    </View>
  )
}

export default Therapist

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  wrapperSection: {
    paddingHorizontal: 16
  },
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 209
  },
  category: {
    flexDirection: 'row'
  },
  wrapperScroll: {
    marginHorizontal: -16
  },
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16
  }
})