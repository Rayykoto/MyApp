import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'
import { DummyTherapist } from '../../../assets'

const Other = () => {
  return (
    <View style={styles.container}>
        <Image source={DummyTherapist} style={styles.avatar} />
    <View>
      <View style={styles.chatContent}>
        <Text style={styles.text}>Baik, ada yang bisa dibantu pak?</Text>
      </View>
      <Text style={styles.date}>4.20 AM</Text>
    </View>
    </View>
  )
}

export default Other

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        alignItems: 'flex-end',
        paddingLeft: 16,
        flexDirection: 'row'
      },
      avatar: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        marginRight: 12
      },
      chatContent: {
        maxWidth: '80%',
        padding: 12,
        paddingRight: 18,
        backgroundColor: colors.primary,
        borderRadius: 10,
        borderBottomLeftRadius: 0
      },
      text: {
        fontSize: 14, 
        fontFamily: fonts.primary.normal,
        color: colors.white
      },
      date: {
        fontSize: 11,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        marginTop: 8
      }
})