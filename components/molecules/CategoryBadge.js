import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
} from 'react-native';
import {theme} from '../../theme';

export function CategoryBadge({category}) {
  const {strCategory, strCategoryThumb} = category;
  const navigation = useNavigation();

  const handlePress = () =>
    navigation.navigate('CategoryDishes', {category: strCategory});

  return (
    <TouchableOpacity onPress={handlePress}>
      <ImageBackground
        style={styles.container}
        source={{uri: strCategoryThumb}}>
        <View style={styles.categoryContainer}>
          <Text style={styles.text}>{strCategory}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: '100%',
    marginHorizontal: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },

  categoryContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.primaryTranslucent,
  },

  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: theme.white,
  },
});
