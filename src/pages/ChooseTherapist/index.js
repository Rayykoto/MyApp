import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header, ListDoctor } from '../../components'
import { DummyTherapist } from '../../assets'
import { colors } from '../../utils'

const ChooseTherapist = ({navigation}) => {
  return (
    <View style={styles.page}>
        <Header type="dark" title="Pilih Dokter Anak"
        onPress={() => navigation.goBack()}
        />
        <ListDoctor 
        type="next" 
        profile={DummyTherapist} 
        name="Diana Nashiiroh" 
        desc="Wanita"
        onPress={() => navigation.navigate('Chatting')}
        />
        <ListDoctor 
        type="next" 
        profile={DummyTherapist} 
        name="Diana Nashiiroh" 
        desc="Wanita" 
        />
        <ListDoctor 
        type="next" 
        profile={DummyTherapist} 
        name="Diana Nashiiroh" 
        desc="Wanita" 
        />
        <ListDoctor type="next" 
        profile={DummyTherapist} 
        name="Diana Nashiiroh" 
        desc="Wanita"
        />
        <ListDoctor 
        type="next" 
        profile={DummyTherapist} 
        name="Diana Nashiiroh" 
        desc="Wanita" 
        />
    </View>
  )
}

export default ChooseTherapist

const styles = StyleSheet.create({
page: {backgroundColor: colors.white, flex: 1}
})