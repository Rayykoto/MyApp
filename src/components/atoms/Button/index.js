import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { colors } from '../../../utils'
import React from 'react'
import IconOnly from './IconOnly'
import BtnIconSend from './BtnIconSend'

const Button = ({type, title, onPress, icon, disable}) => {
  if(type === 'btn-icon-send'){
    return (
      <BtnIconSend disable={disable} />
    )
  }
  if(type === 'icon-only'){
    return (
      <IconOnly icon={icon} onPress={onPress} />
    )
  }
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