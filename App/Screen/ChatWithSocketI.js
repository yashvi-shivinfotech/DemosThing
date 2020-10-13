import React from 'react'
import { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native'
import io from 'socket.io-client';
export default class ChatWithSocketI extends Component{

    constructor(props)
    {
        super(props);
        this.state= {
            isLoadingComplete:false,
            chatMessage:""
          };
    }
   
   

      componentDidMount() { 
         this.socket = io('http://192.168.1.6:3000');
      }
      submitChatMessge(){
        this.socket.emit("message",this.state.chatMessage);
        this.setState({ chatMessage: ""})
    }
  render(){
    return (
        <View>
            <TextInput style={styles.textinputapp}
            value={this.state.chatMessage}
            onSubmitEditing={()=> this.submitChatMessge()}
            onChangeText={chatMessage => 
            {this.setState({chatMessage})}
            }></TextInput>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    textinputapp:{
        padding:10,
        borderBottomColor:'#111',
        borderRadius:10,
        borderBottomWidth:1,
    }
})
