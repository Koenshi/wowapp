import React from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import PropTypes from "prop-types";

export default function Zone({
  name,
  description,
  locationName,
  playerCount,
  bosses
}) {
  return (
    <ScrollView>
      <View>
        <Text style={styles.title}>{name}</Text>
      </View>
      <View style={[styles.overlay, styles.description]}>
        <Text style={styles.text}>
          {description}
          {"\n"}
        </Text>
      </View>
      <View style={[styles.overlay, styles.information]}>
        <Text style={styles.text}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>LOCATION:</Text>{" "}
          {locationName}
          {"\n"}
        </Text>
        <Text style={styles.text}>
          <Text style={{ fontWeight: "bold" }}>TYPE:</Text> {playerCount}-man
        </Text>
      </View>
    </ScrollView>
  );
}

Zone.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  locationName: PropTypes.string.isRequired,
  playerCount: PropTypes.string.isRequired,
  bosses: PropTypes.array.isRequired
};

const styles = StyleSheet.create({
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
  information: {
    marginTop: -10
  }
});
