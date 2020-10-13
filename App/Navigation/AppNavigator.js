import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AppSearch from '../Screen/AppSearch';
import GoogleSignin from '../Screen/AppGoogleSignin';
import Home from '../Screen/Home';
import LiveLocation from '../Screen/LiveLocation';
import NewLiveLocation from '../Screen/NewLiveLocation';
import PaymentIntegrationRazorPay from '../Screen/PaymentIntegrationRazorPay';
import ChatWithSocketIo from '../Screen/ChatWithSocketI';
import ApiAppCallingPhp from '../Screen/ApiAppCallingPhp';

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
    <Stack.Screen
      name="NewLiveLocation"
      component={NewLiveLocation}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="PaymentIntegrationRazorPay"
      component={PaymentIntegrationRazorPay}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="GoogleSignin"
      component={GoogleSignin}
      options={{headerShown: false}}
    />
     <Stack.Screen
      name="ChatWithSocketIo"
      component={ChatWithSocketIo}
      options={{headerShown: false}}
    />
     <Stack.Screen
      name="ApiAppCallingPhp"
      component={ApiAppCallingPhp}
      options={{headerShown: false}}
    />
    
  </Stack.Navigator>
);

export default SplashNavigator;
