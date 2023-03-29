import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IMLogo } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'
import { colors } from '../../utils'

const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <IMLogo />
      <Text style={styles.title}>Login dan Mulai Konsultasi</Text>
      <Input label="Email Address" />
      <Gap height={24} />
      <Input label="Pasword" />
      <Gap height={10} />
      <Link title="Forgot My Password" size={12} />
      <Gap height={30} />
      <Button title="Sign In" onPress={() => navigation.replace('MainApp')}/>
      <Gap height={20} />
      <Link title="Create an Account" align={'center'} size={16} />  
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
  page: {padding: 30, paddingTop:10, backgroundColor: 'white', flex: 1},
  title: {fontSize: 20,
  fontFamily: 'Nunito-Semibold', 
  color: colors.text.primary,
  marginTop: 0,
  marginBottom: 40,
  maxWidth: 153,
}
})