import React from 'react'
import { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import axios from 'axios';


export default class ApiAppCallingPhp extends Component {

    constructor(props) {
        super(props);
        this.state = {
          dataSource: [],
          arrayholder: [],
          message: [],
        };
      }

    componentDidMount() {
        this.callApi();
      }
    
      async callApi() {
        let res = await axios.get('http://ausnsclab.esy.es/foodapi/api.php?type=getProductInfo&customer_id=16&product_id=28');
    
        //console.log('Data of particular application++++++++', res.data);
        this.setState({dataSource: res.data});
        this.setState({arrayholder: res.data});
        this.setState({message: res.data.message});
        // console.log('state data-------', this.state.arrayholder);
      }
   render(){
    return (
        <View>
            <ScrollView>
            <Text>{this.state.message.name}</Text>
            <Text>{this.state.message.description}</Text>
            </ScrollView>

        </View>
    )
   }
}

const styles = StyleSheet.create({})
