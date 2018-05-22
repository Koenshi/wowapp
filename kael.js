import { Font } from 'expo'
import React, { Component } from 'react';
import { View, Button } from 'react-native'

import Zone from './components/Zone';
import Loading from './components/Loading';

export default class Kaelthas extends Component {
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
      <View>
        {/* vvvv That's how to navigate between screens */}
        {/*<Button
          title="Go to About"
          onPress={() => navigate('About')}
        />*/}
      	<Zone name={name} description={description} locationName={locationName} playerCount={numPlayers} bosses={bosses} />
      </View>
    );
  }
}

// Home.propTypes = {
//   navigation: PropTypes.object.isRequired,
// };
