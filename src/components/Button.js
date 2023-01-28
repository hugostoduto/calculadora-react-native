import { Text, StyleSheet, Dimensions, TouchableHighlight } from "react-native";

import React from "react";

export default (props) => {
  return (
    <TouchableHighlight onPress={props.onClick}>
      <Text style={styles.button}>{props.label}</Text>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get("window").width / 4,
    width: Dimensions.get("window").width / 4,
    padding: 20,
    backgroundColor: "#f0f0f0",
    border: 1,
    borderColor: "#888",
    textAlign: "center",
  },
});
