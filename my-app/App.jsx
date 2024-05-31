import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ChildComponentOne from './components/ChildComponentOne.jsx';
import ChildTwo from './components/ChildTwo.jsx';


 const App = () =>  {

  const name = "Parth";

  const fun = () => {
    alert("Hello Parth")
  }
  return (
    <View style={styles.container}>
      {/* <ChildComponentOne name={name}/>
      <ChildTwo fun={fun}/>
       <Text>Hello</Text> */}
       <Text style={[styles.bgColor,styles.font,styles.text,styles.border]}>Hello World</Text>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgColor:{
    backgroundColor: 'green',

  },
  font:{
    fontSize: 40
  },
  text:{
    color: 'white'
  },
  border:{
    borderWidth: 5,
    borderColor: 'black',
    borderRadius: 20,
    padding: 10
  }

});

export default App 