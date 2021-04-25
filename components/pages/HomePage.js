import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {DishesSection, Categories} from '../organisms/';
import {FoodAPI} from '../../api/FoodAPI';

export function HomePage() {
  const [seafood, setSeafood] = useState([]);
  const [breakfast, setBreakfast] = useState([]);
  const [dessert, setDessert] = useState([]);

  useEffect(() => {
    FoodAPI.filterByCategory('Breakfast').then(data => setBreakfast(data));
    FoodAPI.filterByCategory('Dessert').then(data => setDessert(data));
    FoodAPI.filterByCategory('Seafood').then(data => setSeafood(data));
  }, []);

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Categories />
        <DishesSection
          category="Breakfast"
          title="Start your day"
          dishes={breakfast}
        />
        <DishesSection
          category="Dessert"
          title="Make your day more sweet"
          dishes={dessert}
        />
        <DishesSection
          category="Seafood"
          title="Time for seafood"
          dishes={seafood}
        />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
