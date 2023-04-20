import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Gap, Header, Input } from '../../components'
import { colors } from '../../utils'

const Register = ({ navigation }) => {
  const [fullname, setFullname] = useState('');
  const [profession, setProfession] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onContinue = () => {
    console.log(fullname, profession, email, password)

  }
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Input label="Full Name" value={fullname} onChangeText={(value) => setFullname(value)} />
          <Gap height={24} />
          <Input label="Pekerjaan" value={profession} onChangeText={(value) => setProfession(value)} />
          <Gap height={24} />
          <Input label="Email" value={email} onChangeText={(value) => setEmail(value)} />
          <Gap height={24} />
          <Input label="Password" value={password} onChangeText={(value) => setPassword(value)}
            secureTextEntry />
          <Gap height={40} />
        </ScrollView>
        <Button title="Continue" onPress={onContinue} />
      </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white, flex: 1
  },

  content: {
    padding: 40,
    paddingTop: 0
  }

})