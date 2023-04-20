import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { IMGetstarted, IMLogo } from '../../assets';
import { Button, Gap } from '../../components';
import { colors, fonts } from '../../utils';

const GetStarted = ({ navigation }) => {
  return (
    <ImageBackground source={IMGetstarted} style={styles.page}>
      <View style={styles.page}>
        <View>
          <IMLogo />
          <Text style={styles.title}>
            Konsultasi dengan ahlinya jadi lebih mudah & fleksibel
          </Text>
        </View>
        <View>
          <Button title="Get Started" onPress={() => navigation.navigate('Register')} />
          <Gap height={16} />
          <Button type="secondary" title="Sign In" onPress={() => navigation.replace('Login')} />
        </View>
      </View>
    </ImageBackground>
  )
}

export default GetStarted

const styles = StyleSheet.create({
  page: {
    padding: 22,
    justifyContent: 'space-between',
    flex: 1
  },
  title: {
    fontSize: 24,
    color: colors.white,
    marginTop: 30,
    maxWidth: 295,
    fontFamily: fonts.primary[600]
  },
})