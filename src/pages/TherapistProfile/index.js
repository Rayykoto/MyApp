import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap, Header, Profile, ProfileItem } from '../../components'
import { colors } from '../../utils'

const TherapistProfile = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <Header title="Therapist Profile" onPress={() => navigation.goBack()} />
        <Profile name="Rindu Selyna" desc="Therapist Anak" />
        <Gap height={10} />
        <ProfileItem label="Alumnus" value="Universitas Indonesia, 2020" />
        <ProfileItem label="Tempat Praktik" value="Rumah Sakit Umum, Jakarta" />
        <ProfileItem label="No.STR" value="1234567890" />
        <View style={styles.action}>
          <Button title="Start Consultation" onPress={() => navigation.navigate('Chatting')} />
        </View>
      </View>
    </ScrollView>
  )
}

export default TherapistProfile

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1
  },
  action: {
    paddingHorizontal: 40,
    paddingVertical: 23
  }
})