import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import ChildComponentOne from "./components/ChildComponentOne.jsx";
import ChildTwo from "./components/ChildTwo.jsx";

const App = () => {
  const name = "Parth";

  const fun = () => {
    alert("Hello Parth");
  };
  return (
    <View style={styles.container}>
      {/* <ChildComponentOne name={name}/>
      <ChildTwo fun={fun}/>
       <Text>Hello</Text> */}
      {/* <Text style={[styles.bgColor,styles.font,styles.text,styles.border]}>Hello World</Text> */}
      <View style={styles.box1}>
      <Text style={styles.text1}>Hello</Text>
      </View>
      <View style={styles.box2}>
      <Text style={styles.text2}>Hello</Text>
      </View>

      <Image source={{ uri: "https://picsum.photos/200/300" }} style={{ width: 200, height: 100 ,marginTop: 20 , resizeMode:'center'}}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  bgColor: {
    backgroundColor: "green"
  },
  font: {
    fontSize: 40
  },
  text: {
    color: "white"
  },
  border: {
    borderWidth: 5,
    borderColor: "black",
    borderRadius: 20,
    padding: 10
  },
  box1: {
    backgroundColor: "green",
    width: "50%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    opacity: 0.4
  },
  text1:{
    fontWeight: "bold",
    fontSize: 40,
    opacity: 0.9,
    textShadowColor: "black",
    textShadowRadius: 10,
    textShadowOffset: { width: 2, height: 2 },
  },
  box2:{
    backgroundColor: "red",
    width: "50%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center"
  },
  text2:{
    fontWeight: "bold",
    fontSize: 40,
  }

});
 
export default App;
