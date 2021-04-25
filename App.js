import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {theme} from './theme';
import {
  CategoryDishes,
  HomePage,
  SearchPage,
  DishDetailsPage,
} from './components/pages/';
import {Logo, SearchButton} from './components/atoms/';

const Stack = createStackNavigator();

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.white}
      />

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerRightContainerStyle: {paddingRight: 10},
            headerTitle: () => <Logo />,
            headerTitleAlign: 'center',
            headerRight: SearchButton,
            headerBackTitleVisible: false,
          }}>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Search" component={SearchPage} />
          <Stack.Screen name="DishDetails" component={DishDetailsPage} />
          <Stack.Screen name="CategoryDishes" component={CategoryDishes} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
