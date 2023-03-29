import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {IMLogo} from '../../assets';
import { colors } from '../../utils';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted')
    }, 3000);
  }, []);
  return (
    <View style={styles.page}>
      <IMLogo />
      <Text style={styles.title}>My Theraphy</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: colors.text.primary,
    fontFamily: 'Nunito-SemiBold',
    marginTop: 20,
  },
});
