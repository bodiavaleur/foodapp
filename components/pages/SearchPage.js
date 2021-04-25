import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
  FlatList,
} from 'react-native';
import {FoodAPI} from '../../api/FoodAPI';
import {theme} from '../../theme';
import {DishCard} from '../molecules';

export function SearchPage() {
  const [dishes, setDishes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    FoodAPI.searchByName(searchQuery).then(data => setDishes(data));
  }, [searchQuery]);

  const handleSearchInput = text => setSearchQuery(text);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search dish"
          onChangeText={handleSearchInput}
        />
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
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
  },

  searchInput: {
    width: '80%',
    height: 32,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: theme.white,
  },

  list: {
    width: '100%',
    justifyContent: 'center',
  },
});
