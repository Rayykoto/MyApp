import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconMap, IconMapActive, IconMessage, IconMessageActive, IconTherapist, IconTherapistActive } from '../../../assets'
import { colors, fonts } from '../../../utils'

const TabItem = ({title, active, onPress, onLongPress}) => {
    const Icon = () => {
        if(title === 'Therapist'){
            return active ? <IconTherapistActive /> : <IconTherapist />
        }
        if(title === 'Messages'){
            return active ? <IconMessageActive /> : <IconMessage />
        }
        if(title === 'Hospitals'){
            return active ? <IconMapActive /> : <IconMap />
        }
        return <IconTherapist />
    }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
        <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text: (active) => (
        {
            fontSize: 10,
            color: active ? colors.text.MenuActive : colors.text.MenuInactive,
            fontFamily: fonts.primary[600],
            marginTop: 4
        }
    )
})