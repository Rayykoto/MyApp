import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Gap, Header, Input, Loading } from '../../components'
import { colors, useForm } from '../../utils'
import { Fire } from '../../config'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = ({ navigation }) => {

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });

  const onContinue = () => {
    setLoading(true);
    const auth = getAuth();
    createUserWithEmailAndPassword(Fire, form.email, form.password)
      .then((success) => {
        setLoading(false)
        console.log('register success', success)
      })
      .catch((error) => {
        const errorMessage = error.message;
        setLoading(false)
        console.log(errorMessage)
      });
  }
  return (
    <>
      <View style={styles.page}>
        <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Input
              label="Full Name"
              value={form.fullName}
              onChangeText={value => setForm('fullName', value)}
            />
            <Gap height={24} />
            <Input
              label="Pekerjaan"
              value={form.profession}
              onChangeText={value => setForm('profession', value)}
            />
            <Gap height={24} />
            <Input label="Email"
              value={form.email}
              onChangeText={value => setForm('email', value)}
            />
            <Gap height={24} />
            <Input label="Password"
              value={form.password}
              onChangeText={value => setForm('password', value)}
              secureTextEntry />
            <Gap height={40} />
          </ScrollView>
          <Button title="Continue" onPress={onContinue} />
        </View>
      </View>
      {loading && <Loading />}
    </>
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