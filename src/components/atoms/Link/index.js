import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../../utils'

const Link = ({title, size, align, onPress}) => {
  return (
    <TouchableOpacity>
      <Text style={styles.text(size, align)} onPress={onPress}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Link

const styles = StyleSheet.create({
    text: (size, align) => 
    ({
        fontSize: size,
        color: colors.text.secondary,
        fontFamily: 'Nunito-Regular',
        textDecorationLine: 'underline',
        textAlign: align
    })
})