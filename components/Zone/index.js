import React from 'react';
import { StyleSheet, View, Text, ImageBackground, FlatList } from 'react-native'
import PropTypes from 'prop-types';

export default function Zone({ name, description, locationName, playerCount, bosses }) {
  return (
  	<ImageBackground source={require('../../assets/bg2.jpg')} style={styles.pic}>
        <View>
          <Text style={styles.title}>{name}</Text>
        </View>
        <View style={[styles.overlay, styles.description]}>
          <Text style={styles.text}>{description}{"\n"}</Text>
        </View>
        <View style={[styles.overlay, styles.information]}>
          <Text style={styles.text}><Text style={{fontWeight: 'bold', fontSize: 20}}>LOCATION:</Text> {locationName}{"\n"}</Text>
          <Text style={styles.text}><Text style={{fontWeight: 'bold'}}>TYPE:</Text> {playerCount}-man{"\n"}</Text>
          <Text style={styles.text}><Text style={{fontWeight: 'bold'}}>BOSSES:</Text></Text>
          <FlatList
            data={bosses}
            renderItem={({item}) => <Text style={styles.text}>{item.name}</Text>}
            keyExtractor={(item, index) => index}
          />
        </View>

  	</ImageBackground>);
}

Zone.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  locationName: PropTypes.string.isRequired,
  playerCount: PropTypes.number.isRequired,
  bosses: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontFamily: 'Muli',
    fontSize: 18,
    letterSpacing: 1
  },
  title: {
    fontSize: 50,
    color: 'white',
    marginTop: 30,
    marginLeft: 50,
    fontFamily: 'DancingScript'
  },
  pic: {
    flex: 1,
    width: null,
    height: null,
  },
  overlay: {
    margin: 30,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 15,
    padding: 15
  },
  description: {
    marginTop: 15
  },
  information: {
    marginTop: -10
  }
});
