import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import {FoodAPI} from '../../api/FoodAPI';
import {theme} from '../../theme';

export function DishDetailsPage({route}) {
  const [dish, setDish] = useState(null);
  const {idMeal} = route.params;

  useEffect(() => {
    FoodAPI.getDetailsById(idMeal).then(data => {
      const [meal] = data;
      setDish(meal);
    });
  }, [idMeal]);

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.dishContainer}>
          {dish && (
            <>
              <Text style={styles.title}>{dish.strMeal}</Text>
              <Image style={styles.image} source={{uri: dish.strMealThumb}} />
              <Text style={styles.subtitle}>How to cook?</Text>
              <Text style={styles.instructions}>{dish.strInstructions}</Text>
            </>
          )}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  dishContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 25,
  },

  title: {
    marginVertical: 12,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: theme.text,
  },

  image: {
    marginVertical: 10,
    width: 300,
    height: 300,
    borderRadius: 10,
  },

  subtitle: {
    marginVertical: 8,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: theme.text,
  },

  instructions: {
    fontSize: 16,
    color: theme.text,
  },
});
