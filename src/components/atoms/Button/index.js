import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors } from '../../../utils'
import React from 'react'

const Button = ({type, title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  container: type => ({ 
  backgroundColor: type === 'secondary' ? colors.button.primary.text : colors.button.primary.backgorund, 
  paddingVertical: 10, 
  borderRadius: 10 
  }),
  text: type => ({
    fontSize: 18, 
    fontFamily: 'Nunito-SemiBold',
    textAlign: 'center', 
    color: type === 'secondary' ? colors.button.secondary.text : colors.button.secondary.backgorund
  })
})