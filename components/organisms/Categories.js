import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList, View, ActivityIndicator} from 'react-native';
import {theme} from '../../theme';
import {CategoryBadge} from '../molecules';
import {FoodAPI} from '../../api/FoodAPI';

export function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    FoodAPI.getCategoriesList().then(data => setCategories(data));
  }, []);

  return (
    <View style={styles.container}>
      {categories.length ? (
        <FlatList
          contentContainerStyle={styles.list}
          horizontal
          renderItem={({item}) => <CategoryBadge category={item} />}
          data={categories}
          keyExtractor={item => item.idCategory}
        />
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 64,
    padding: 5,
    marginVertical: 16,
    borderRadius: 14,
    overflow: 'hidden',
    backgroundColor: theme.white,
  },

  list: {
    alignItems: 'center',
  },
});
