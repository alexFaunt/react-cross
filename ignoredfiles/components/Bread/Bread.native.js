import React from 'react'
import { View, Text } from 'react-native'

export default ({ children }) => (
  <View>
    <Text>Top layer native bread</Text>
    { children }
    <Text>Bottom layer native bread</Text>
  </View>
)
