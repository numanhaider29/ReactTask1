import * as React from 'react';
 import { Component } from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';

 import { TouchableOpacity, Button } from 'react-native';
 import InstagramLogin from 'react-native-instagram-login';
 import CookieManager from '@react-native-community/cookies';
 import 'react-native-gesture-handler';


 import {
   StyleSheet,
   Text,
   View,
 } from 'react-native';


 export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
    };
  }

  setIgToken = (data) => {
    console.log('data', data)
    this.setState({ token: data.access_token })
  }

  onClear() {
    CookieManager.clearAll(true)
      .then((res) => {
        this.setState({ token: null })
      });
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.instagramLogin.show()}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Login now</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, { marginTop: 10, backgroundColor: 'green' }]}
          onPress={() => this.onClear()}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Logout</Text>
        </TouchableOpacity>
        <Text style={{ margin: 10 }}>Token: {this.state.token}</Text>
        {this.state.failure && (
          <View>
            <Text style={{ margin: 10 }}>
              failure: {JSON.stringify(this.state.failure)}
            </Text>
          </View>
        )}
        <InstagramLogin
          ref={ref => (this.instagramLogin = ref)}
          appId='1156962301462081'
          appSecret='eab55fc6dfaf58586ddeb25f2b124ced'
          redirectUrl='https://localhost:4000/'
          scopes={['user_profile', 'user_media']}
          onLoginSuccess={this.setIgToken}
          onLoginFailure={(data) => console.log(data)}
          language='tr' //default is 'en' for english
        />
        <Button
        title="Go to Home"
        onPress={() => this.props.navigation.navigate('Home')}
      />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  btn: {
   borderRadius: 5,
   backgroundColor: 'orange',
   height: 30,
   width: 100,
   justifyContent: 'center',
   alignItems: 'center',
 }
});