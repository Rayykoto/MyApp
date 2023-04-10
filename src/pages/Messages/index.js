import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { List } from '../../components'
import { colors, fonts } from '../../utils'
import { DummyTherapist, DummyUser } from '../../assets'

const Messages = () => {
  const [therapists] = useState([
    {
      id: 1,
      profile: DummyUser,
      name: 'Koto',
      desc: 'Baik ibu, terimakasih banyak atas wakt...'
    },
    {
      id: 2,
      profile: DummyTherapist,
      name: 'Farah',
      desc: 'Baik ibu, kaka...'
    },
    {
      id: 3,
      profile: DummyTherapist,
      name: 'Putri',
      desc: 'Oke, Terimakasih...'
    },
  ])
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {
          therapists.map(therapist => {
            return <List 
            key={therapist.id}
            profile={therapist.profile} 
            name={therapist.name} 
            desc={therapist.desc} />
          })
        }
      </View>
    </View>
  )
}

export default Messages

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary, flex: 1
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  title: {
    fontSize: 20, 
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16
  }
})