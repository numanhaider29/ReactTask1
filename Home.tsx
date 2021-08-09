 import * as React from 'react';
 import { Component } from 'react';

 import 'react-native-gesture-handler';


 import {
   Text,
   View,
 } from 'react-native';


export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Home here</Text>
      </View>
    );
  }
}
