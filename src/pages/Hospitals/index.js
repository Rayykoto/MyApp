import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { DummyHospital1, DummyHospital2, DummyHospital3, IMHospital } from '../../assets'
import { colors, fonts } from '../../utils'
import { ListHospital } from '../../components'

const Hospital = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={IMHospital} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.desc}>3 Tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospital  type="Rumah Sakit" name="Citra Bunga Meredeka" address="Jln. Hybrida Kelapa Gading" pic={DummyHospital1}/>
        <ListHospital  type="Rumah Anak" name="Citra Bunga Meredeka" address="Jln. Hybrida Kelapa Gading" pic={DummyHospital2}/>
        <ListHospital  type="Rumah Sakit Jiwa" name="Citra Bunga Meredeka" address="Jln. Hybrida Kelapa Gading" pic={DummyHospital3}/>
        <ListHospital />
        <ListHospital />
      </View>
    </View>
  )
}

export default Hospital

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary, 
    flex: 1,
  },
  background: {
    height: 240, 
    paddingTop: 30,
    },
  title: {
    fontSize: 20, 
    fontFamily: fonts.primary[600], 
    color: colors.white,
    textAlign: 'center'
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    textAlign: 'center',
    marginTop: 6
  },
  content : {
    backgroundColor: colors.white,
    borderRadius: 20,
    marginTop: -30,
    paddingTop: 3,
    flex: 1
  }
})