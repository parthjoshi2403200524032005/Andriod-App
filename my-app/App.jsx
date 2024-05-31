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
      <ChildComponentOne name={name}/>
      <ChildTwo fun={fun}/>
       <Text>Hello</Text>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App 