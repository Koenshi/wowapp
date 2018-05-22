import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation';

import HomeScreen from './Home';
import KaelScreen from './kael';

const RootStack = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerTransparent: true
      },
    },
    // About: {
    //   screen: AboutScreen
    // },
	},
  {
    initialRouteName: 'Home'
  }
);

  export default class App extends Component {
    render() {
      return <RootStack />;
    }
  }
