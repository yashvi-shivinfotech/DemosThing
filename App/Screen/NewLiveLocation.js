import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Geocoder from 'react-native-geocoding';
import Geolocation from 'react-native-geolocation-service';

export default class NewLiveLocation extends Component {
  constructor() {
    super();
    this.state = {
      latitude: 0,
      longitude: 0,
      error: null,
      Address: null,
    };
  }

  async componentDidMount() {
    Geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        Geocoder.init('AIzaSyDAC1LxI2bfSImrJLyS5J4nCnuul3-caqA');
        Geocoder.from(position.coords.latitude, position.coords.longitude)
          .then((json) => {
            console.log('Address', json);
            var addressComponent = json.results[0].address_components;
            this.setState({
              Address: addressComponent,
            });
            console.log(addressComponent);
          })
          .catch((error) => console.warn(error));
      },
      (error) => {
        // See error code charts below.
        this.setState({error: error.message}),
          console.log(error.code, error.message);
      },
      {enableHighAccuracy: false, timeout: 10000, maximumAge: 100000},
    );
  }

  render() {
    return (
      <View>
        <Text style={styles.txt}>Lat={this.state.latitude}</Text>
        <Text style={styles.txt}>Long={this.state.longitude}</Text>
        <Text style={styles.txt}>Address={this.state.Address}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5fcff',
    padding: 11,
  },
  text: {
    fontSize: 22,
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
  },
  txt: {
    padding: 15,
    margin: 10,
    backgroundColor: '#bbb',
  },
});
