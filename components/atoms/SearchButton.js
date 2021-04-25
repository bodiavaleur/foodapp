import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button} from 'react-native';
import {theme} from '../../theme';

export function SearchButton() {
  const navigation = useNavigation();
  const handleSearchPress = () => navigation.navigate('Search');

  return (
    <Button color={theme.primary} title="Search" onPress={handleSearchPress} />
  );
}
