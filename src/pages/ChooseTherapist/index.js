import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Header, List } from '../../components'
import { DummyTherapist } from '../../assets'
import { colors } from '../../utils'

const ChooseTherapist = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <Header type="dark" title="Pilih Dokter Anak"
        onPress={() => navigation.goBack()}
      />
      <List
        type="next"
        profile={DummyTherapist}
        name="Rasty Felysa"
        desc="Wanita"
        onPress={() => navigation.navigate('Chatting')}
      />
      <List
        type="next"
        profile={DummyTherapist}
        name="Rasty Felysa"
        desc="Wanita"
      />
      <List
        type="next"
        profile={DummyTherapist}
        name="Rasty Felysa"
        desc="Wanita"
      />
      <List type="next"
        profile={DummyTherapist}
        name="Rasty Felysa"
        desc="Wanita"
      />
      <List
        type="next"
        profile={DummyTherapist}
        name="Rasty Felysa"
        desc="Wanita"
      />
    </View>
  )
}

export default ChooseTherapist

const styles = StyleSheet.create({
  page: { backgroundColor: colors.white, flex: 1 }
})