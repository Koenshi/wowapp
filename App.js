import React, { Component } from "react";
import { createDrawerNavigator } from "react-navigation";

import HomeScreen from "./Home";
import Fireheart from "./bosses/selin";
import Vexallus from "./bosses/vexallus"
import Delrissa from "./bosses/delrissa";
import Kaelthas from "./bosses/kael";

const RootStack = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Selin: {
      screen: Fireheart
    },
    Vexallus: {
      screen: Vexallus
    },
    Delrissa: {
      screen: Delrissa
    },
    Kael: {
      screen: Kaelthas
    },
  },
  {
    initialRouteName: "Home"
  }
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
