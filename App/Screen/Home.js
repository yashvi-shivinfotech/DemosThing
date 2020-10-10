import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AppSearch');
        }}>
        <Text style={styles.txt}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('LiveLocation');
        }}>
        <Text style={styles.txt}> Location with geolocation</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('NewLiveLocation');
        }}>
        <Text style={styles.txt}> react-native-geolocation-service</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('PaymentIntegrationRazorPay');
        }}>
        <Text style={styles.txt}>RazorPay Payment Integration</Text>
      </TouchableOpacity>
      
      <TouchableOpacity  onPress={() => {
          navigation.navigate('GoogleSignin');
        }}>
        <Text style={styles.txt}>Firebase Google Signin</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.txt}>Firebase Facebook Signin</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txt: {
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#bbb',
    marginTop: 10,
  },
});
