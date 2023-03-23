import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IMLogo} from '../../assets';
const Splash = () => {
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
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: '#112340',
    fontFamily: 'Nunito-SemiBold',
    marginTop: 20,
  },
});
