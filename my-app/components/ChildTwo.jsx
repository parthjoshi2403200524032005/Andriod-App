import React from 'react'
import { Button, Text, View } from 'react-native'

const ChildTwo = (props) => {
  return (
    <View>
      <Text>ChildComponentTwo</Text>
      <Button onPress={props.fun} title="Click me" />
    </View>
  )
}

export default ChildTwo;