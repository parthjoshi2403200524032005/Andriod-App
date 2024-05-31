import React from 'react'
import { Text, View } from 'react-native'

const ChildComponentOne = (props) => {
  return (
    <View>
      <Text>ChildComponentOne</Text>
      <Text>{props.name}</Text>
    </View>
  )
}

export default ChildComponentOne
