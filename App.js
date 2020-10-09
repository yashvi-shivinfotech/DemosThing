import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppNavigator from './App/Navigation/AppNavigator';
import {NavigationContainer} from '@react-navigation/native';
import LiveLocation from './App/Screen/LiveLocation';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
