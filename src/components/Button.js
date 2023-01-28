import { Text, StyleSheet, Dimensions, TouchableHighlight } from "react-native";

import React from "react";

export default (props) => {
  const styleButton = [styles.button];

  if (props.double) styleButton.push(styles.doubleButton);
  if (props.triple) styleButton.push(styles.tripleButton);
  if (props.operation) styleButton.push(styles.operationButton);

  return (
    <TouchableHighlight onPress={props.onClick}>
      <Text style={styleButton}>{props.label}</Text>
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
  operationButton: {
    backgroundColor: "#fa8231",
  },
  doubleButton: {
    width: (Dimensions.get("window").width / 4) * 2,
  },
  tripleButton: {
    width: (Dimensions.get("window").width / 4) * 2,
  },
});
