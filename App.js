import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function App() {
  const [colorSquare, setColor] = useState(["red", "green", "blue"]);
  const [index, setIndex] = useState(0);
  const onPress = (index) => {
    setIndex(index);
  };
  const onChange = (i) => {
    var a = index;
    if (i > 0 && index < 2) setIndex(a + 1);
    else if (i < 0 && index > 0) setIndex(a - 1);
  };
  const showButtonColor = () => {
    const buttonColors = colorSquare.map((color, i) => {
      return (
        <TouchableOpacity
          key={i}
          onPress={() => onPress(i)}
          style={[styles.btn, { backgroundColor: `${color}` }]}
        ></TouchableOpacity>
      );
    });
    return buttonColors;
  };
  return (
    <View style={styles.container}>
      <View style={styles.btnArr}>
        {showButtonColor()}
        <TouchableOpacity
          onPress={() => onChange(-1)}
          style={[styles.btn, styles.while]}
        >
          <Text>Undo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onChange(1)}
          style={[styles.btn, styles.while]}
        >
          <Text>Redo</Text>
        </TouchableOpacity>
      </View>
      <View
        style={[styles.square, { backgroundColor: `${colorSquare[index]}` }]}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  square: {
    width: 120,
    height: 120,
  },
  btnArr: {
    position: "absolute",
    top: 30,
    left: 0,
    flexDirection: "row",
  },
  btn: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  red: {
    backgroundColor: "red",
  },
  green: {
    backgroundColor: "green",
  },
  blue: {
    backgroundColor: "blue",
  },
  while: {
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 2,
  },
});
