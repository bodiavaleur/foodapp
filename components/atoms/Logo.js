import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';

export function Logo() {
  const navigation = useNavigation();

  const handlePresLogo = () => navigation.popToTop();

  return (
    <TouchableOpacity onPress={handlePresLogo}>
      <Image style={styles.logo} source={require('../../assets/logo.png')} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 85,
    height: 40,
    resizeMode: 'contain',
  },
});
