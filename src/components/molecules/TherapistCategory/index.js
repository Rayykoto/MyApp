import { StyleSheet, Text, TouchableOpacity, } from 'react-native'
import React from 'react'
import { IconTherapistKhusus, IconTherapistKid, IconTherapistPsikiater, IconTherapistUmum } from '../../../assets'
import { colors, fonts } from '../../../utils'

const TherapistCategory = ({category, onPress}) => {
  const Icon = () => {
    if(category === 'Therapist Anak'){
      return <IconTherapistKid style={styles.illustration} />;
    }
    if(category === 'Therapist Remaja'){
      return <IconTherapistKhusus style={styles.illustration} />;
    }
    if(category === 'Therapist Dewasa'){
      return <IconTherapistPsikiater style={styles.illustration} />;
    }
    if(category === 'Therapist Khusus'){
      return <IconTherapistUmum style={styles.illustration} />;
    }
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon />
      <Text style={styles.label}>Saya butuh</Text>
      <Text style={styles.category}>{category}</Text>
    </TouchableOpacity>
  )
}

export default TherapistCategory

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.cardLight,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
    width: 100,
    height: 145
  },
  illustration: {
    marginBottom: 28  
  },
  label: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.primary
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.primary
  }
})