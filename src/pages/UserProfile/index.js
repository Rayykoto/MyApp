import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Gap, Header, List, Profile } from '../../components'

const UserProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
        <Header title="Profile" onPress={() => navigation.goBack()}/>
        <Profile />
        <List name="Edit Profile" desc="Last Updated Yesterday" type="next" icon="edit-profile" />
        <List name="Language" desc="Available 12 Language" type="next" icon="language" />
        <List name="Give Us Rate" desc="On Google Play Store" type="next" icon="rate" />
        <List name="Help" desc="Read our guidelines" type="next" icon="help" />
    </View>
  )
}

export default UserProfile

const styles = StyleSheet.create({
    page: {flex: 1, backgroundColor: 'white'}
})