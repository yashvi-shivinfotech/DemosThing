import React, {Component, useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import axios from 'axios';

export default class AppSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      arrayholder: [],
    };
  }

  componentDidMount() {
    this.callApi();
  }

  async callApi() {
    let res = await axios.get('https://jsonplaceholder.typicode.com/users');

    //console.log('Data of particular application++++++++', res.data);
    this.setState({dataSource: res.data});
    this.setState({arrayholder: res.data});
    //console.log('state data-------', this.state.arrayholder);
  }

  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.state.arrayholder.filter(function (item) {
      //applying filter for the inserted text in search bar
      const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      text: text,
    });
  }

  render() {
    return (
      <TouchableOpacity>
        <View style={{padding: 10}}>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={(text) => this.SearchFilterFunction(text)}
            value={this.state.text}
            underlineColorAndroid="transparent"
            placeholder="Search Here"
          />
          <FlatList
            padding={30}
            data={this.state.dataSource}
            renderItem={({item}) => (
              <View style={{height: 50}}>
                <Text
                  onPress={() => console.log(item.name)}
                  style={{height: 50}}>
                  {item.name}
                </Text>
                <View style={{height: 1, backgroundColor: 'gray'}}></View>
              </View>
            )}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
});
