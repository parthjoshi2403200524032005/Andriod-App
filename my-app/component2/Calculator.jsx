import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Calculator = () => {
  const [expression, setExpression] = useState('');

  const handleButtonPress = (button) => {
    if (button === '=') {
      try {
        const result = eval(expression);
        setExpression(result.toString());
      } catch (error) {
        setExpression('Error');
      }
    } else if (button === 'C') {
      setExpression('');
    } else if (button === '⌫') {
      setExpression((prevExpression) => prevExpression.slice(0, -1));
    } else {
      setExpression((prevExpression) => prevExpression + button);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{expression}</Text>
      </View>
      <View style={styles.buttons}>
        {['7', '8', '9', '4', '5', '6', '1', '2', '3', 'C', '0', '-', '*', '/', '=', '+', '⌫'].map((button) => (
          <TouchableOpacity
            key={button}
            style={styles.button}
            underlayColor="#CCC"
            onPress={() => handleButtonPress(button)}>
            <Text style={styles.buttonText}>{button}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  display: {
    width: '100%',
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 10,
    marginBottom: 10,
  },
  displayText: {
    fontSize: 40,
    color: '#FFF',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'center',
    alignItems: 'center',
  },
  button: {
    width: '25%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'steelblue',
    margin: 2,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 40,
    color: '#000',
  },
});

export default Calculator;
