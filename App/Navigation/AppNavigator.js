import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AppSearch from '../Screen/AppSearch';
import Home from '../Screen/Home';
import LiveLocation from '../Screen/LiveLocation';

const Stack = createStackNavigator();
const SplashNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
    <Stack.Screen
      name="AppSearch"
      component={AppSearch}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="LiveLocation"
      component={LiveLocation}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default SplashNavigator;
