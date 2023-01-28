import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "./src/components/Button";
import Display from "./src/components/Display";
import React, { useState } from "react";
export default function App() {
  const [displayValue, setDisplayValue] = useState(0);

  const addDigit = (n) => {
    setDisplayValue(n);
  };
  const clearMemory = () => {
    setDisplayValue(0);
  };
  const setOperation = (operation) => {};
  return (
    <SafeAreaView style={styles.container}>
      <Display value={displayValue} />
      <View style={styles.buttons}>
        <Button operation onClick={clearMemory} triple label="AC" />
        <Button operation onClick={setOperation} label="÷" />
        <Button onClick={() => addDigit(7)} label="7" />
        <Button onClick={() => addDigit(8)} label="8" />
        <Button onClick={() => addDigit(9)} label="9" />
        <Button operation onClick={setOperation()} label="x" />
        <Button onClick={() => addDigit(4)} label="4" />
        <Button onClick={() => addDigit(5)} label="5" />
        <Button onClick={() => addDigit(6)} label="6" />
        <Button operation onClick={setOperation()} label="-" />
        <Button onClick={() => addDigit(1)} label="1" />
        <Button onClick={() => addDigit(2)} label="2" />
        <Button onClick={() => addDigit(3)} label="3" />
        <Button operation onClick={setOperation()} label="+" />
        <Button onClick={() => addDigit(0)} label="0" />
        <Button label="." />
        <Button triple label="=" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
