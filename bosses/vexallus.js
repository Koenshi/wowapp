import { Font } from "expo";
import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
  ScrollView,
  Image
} from "react-native";

// import Zone from "./components/Zone";
import Loading from "../components/Loading";

// Assets
import pic from "../assets/pic.jpg";
import bg2 from "../assets/bg2.jpg";
import Muli from "../assets/fonts/Muli-Regular.ttf";
import DancingScript from "../assets/fonts/DancingScript-Regular.ttf";

export default class Vexallus extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, data: null, error: null };
  }

  componentDidMount() {
    Font.loadAsync({ Muli, DancingScript });

    return fetch(
      "https://us.api.battle.net/wow/zone/4131?locale=en_US&apikey=y7qqz34zvf8pa8229tbuygzggu6d4yx5"
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          isLoading: false,
          data
        });
          // console.log(data.bosses[3].name);
      })
      .catch(error => {
        this.setState({
          isLoading: false,
          error: true
        });
        console.error(error);
      });
  }

  render() {
    const { isLoading, error, data } = this.state;
    const {
      navigation: { navigate }
    } = this.props;

    if (isLoading) {
      return <Loading />;
    }

    if (error) {
      // TODO: Render an error component here
    }

    const bossName = data.bosses[1].name;
    const bossDesc = data.bosses[1].description;

    return (
      <ImageBackground source={bg2} style={styles.pic}>
      <View>
        <Text style={styles.title}>{bossName}</Text>
      </View>
      <View style={[styles.overlay, styles.description]}>
        <Text style={styles.text}>
          {bossDesc}
          {"\n"}
        </Text>
      </View>

      <ScrollView
        horizontal={true}
        style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
      <TouchableOpacity style={styles.button} onPress={() => navigate('Home')}>
        <Text style={styles.buttonText}>{"Magister's Terrace"}</Text>
      </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigate('Selin')}>
          <Text style={styles.buttonText}>{"Selin Fireheart"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigate('Vexallus')}>
          <Text style={styles.buttonText}>{"Vexallus"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigate('Delrissa')}>
          <Text style={styles.buttonText}>{"Priestess Delrissa"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigate('Kael')}
        >
          <Text style={styles.buttonText}>{"Kael'thas Sunstrider"}</Text>
        </TouchableOpacity>
      </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 60,
    justifyContent: "center",
    marginLeft: 40,
    marginRight: 40,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 20,
    backgroundColor: "rgba(225, 164, 57, 0.5)",
    zIndex: 2,
    padding: 20
  },
  buttonText: {
    fontFamily: "DancingScript",
    color: "white",
    fontSize: 25
  },
  pic: {
    flex: 1,
    width: null,
    height: null
  },
  pic2: {
    marginLeft: 60,
    marginBottom: 20,
    marginTop: -40,
    height: 150,
    width: 300
  },
  text: {
    color: "white",
    fontFamily: "Muli",
    fontSize: 18,
    letterSpacing: 1
  },
  title: {
    fontSize: 50,
    color: "white",
    marginTop: 50,
    marginLeft: 50,
    fontFamily: "DancingScript"
  },
  overlay: {
    margin: 30,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: 15,
    padding: 15
  },
  description: {
    marginTop: 15
  },
});
