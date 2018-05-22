import { Font } from 'expo'
import React, { Component } from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native'

import Zone from './components/Zone';
import Loading from './components/Loading';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, data: null, error: null, };
  }

  componentDidMount() {
    Font.loadAsync({
      'Muli': require('./assets/fonts/Muli-Regular.ttf'),
      'DancingScript': require('./assets/fonts/DancingScript-Regular.ttf')
    });

    return fetch('https://us.api.battle.net/wow/zone/4131?locale=en_US&apikey=y7qqz34zvf8pa8229tbuygzggu6d4yx5')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          isLoading: false,
          data,
        });
        console.log(data.bosses)
      })
      .catch((error) =>{
				this.setState({
          isLoading: false,
		  		error: true,
        });
        console.error(error);
      });
  }

  render() {
		const { isLoading, error, data } = this.state;
    const { navigation: { navigate } } = this.props;

    if (isLoading) {
      return(<Loading />);
    }

		if (error) {
			// Render an error message here plz
		}

  	const { name, description, location: { name: locationName }, numPlayers, bosses } = data;

    return(
      <View style={{flex: 1, backgroundColor: 'transparent' }}>
          <TouchableOpacity style={styles.button} onPress={() => navigate()}>
            <Text style={styles.buttonText}>{"Selin Fireheart"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigate()}>
            <Text style={styles.buttonText}>{"Vexallus"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigate()}>
            <Text style={styles.buttonText}>{"Priestess Delrissa"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigate('Kaelthas')}>
            <Text style={styles.buttonText}>{"Kael'thas Sunstrider"}</Text>
          </TouchableOpacity>
      	<Zone name={name} description={description} locationName={locationName} playerCount={numPlayers} bosses={bosses} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 80,
    justifyContent: 'center',
    marginLeft: 20,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 20,
    backgroundColor: 'rgba(225, 164, 57, 0.3)',
    zIndex: 2,
    padding: 20
  },
  buttonText: {
    fontFamily: 'DancingScript',
    color: 'white',
    fontSize: 25
  }
})

// Home.propTypes = {
//   navigation: PropTypes.object.isRequired,
// };
