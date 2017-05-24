/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
//
// export default class webrowser extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.android.js
//         </Text>
//         <Text style={styles.instructions}>
//           Double tap R on your keyboard to reload,{'\n'}
//           Shake or press menu button for dev menu
//         </Text>
//       </View>
//     );
//   }
// }

import React from 'react';
import {
    AppRegistry,
    Text,
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import Browser from './app/components/Browser';
import SecondScene from './app/components/SecondScene';

const webrowser = StackNavigator({
    Browser: { screen: Browser },
    SecondScene: { screen: SecondScene },
});

AppRegistry.registerComponent('webrowser', () => webrowser);
