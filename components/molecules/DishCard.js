import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {theme} from '../../theme';

export function DishCard({dish}) {
  const {strMeal, strMealThumb, idMeal} = dish;
  const navigation = useNavigation();

  const handlePress = () => navigation.navigate('DishDetails', {idMeal});

  return (
    <TouchableOpacity onPress={handlePress}>
      <ImageBackground style={styles.container} source={{uri: strMealThumb}}>
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {strMeal}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 128,
    height: 128,
    margin: 5,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#ccc',
  },

  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: theme.white,
  },
});
