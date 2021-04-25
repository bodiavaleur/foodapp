import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, SafeAreaView, FlatList, View} from 'react-native';
import {FoodAPI} from '../../api/FoodAPI';
import {DishCard} from '../molecules';
import {theme} from '../../theme';

export function CategoryDishes({route}) {
  const [dishes, setDishes] = useState([]);
  const {category} = route.params;

  useEffect(() => {
    FoodAPI.filterByCategory(category).then(data => setDishes(data));
  }, [category]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.categoryContainer}>
        <Text style={styles.title}>{category}</Text>
        <FlatList
          contentContainerStyle={styles.list}
          data={dishes}
          numColumns={2}
          renderItem={({item}) => <DishCard dish={item} />}
          keyExtractor={item => item.idMeal}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  categoryContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  title: {
    marginVertical: 10,
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.text,
  },

  list: {
    alignItems: 'center',
  },
});
