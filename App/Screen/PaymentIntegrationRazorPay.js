import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

export default function PaymentIntegration() {
  //card number: 5104015555555558
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          var options = {
            description: 'Payment Integration Demo',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png',
            currency: 'INR',
            key: 'rzp_test_6SchXBozFKOiVS', // Your api key
            amount: '100',
            name: 'Demo React Native',
            prefill: {
              email: 'void@razorpay.com',
              contact: '7436073277',
              name: 'Razorpay Software',
            },
            theme: {color: '#111111'},
          };
          RazorpayCheckout.open(options)
            .then((data) => {
              //alert(`Success: ${data.razorpay_payment_id}`);
              alert(`Success: "Payment Successfull"`);
            })
            .catch((error) => {
              // alert(`Error: ${error.code} | ${error.description}`);
              alert(`Error: "Payment Failure"`);
            });
        }}>
        <Text style={styles.text}>Pay Rs.1</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
