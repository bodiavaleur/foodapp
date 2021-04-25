import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {theme} from '../../theme';
import {DishCard} from '../molecules';

export function DishesSection({title, dishes, category}) {
  const navigation = useNavigation();

  const handlePress = () => navigation.navigate('CategoryDishes', {category});

  return (
    <View style={styles.container}>
      {dishes.length ? (
        <>
          <Text style={styles.topTitle}>{category}</Text>
          <Text style={styles.sectionTitle}>{title}</Text>
          <View style={styles.dishesList}>
            {dishes.length
              ? dishes
                  .slice(0, 4)
                  .map(dish => <DishCard dish={dish} key={dish.idMeal} />)
              : null}
          </View>
          <TouchableOpacity onPress={handlePress}>
            <Text style={styles.showMoreText}>show more</Text>
          </TouchableOpacity>
        </>
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginVertical: 16,
    padding: 10,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
    backgroundColor: theme.white,
  },

  topTitle: {
    marginVertical: 8,
    fontSize: 16,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: theme.textGray,
  },

  sectionTitle: {
    marginVertical: 8,
    fontWeight: 'bold',
    fontSize: 32,
    color: theme.text,
  },

  dishesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  showMoreText: {
    marginVertical: 5,
    alignSelf: 'center',
    fontSize: 13,
    color: theme.primary,
  },
});
