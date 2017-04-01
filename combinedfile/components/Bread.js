import React from 'react'
import { View, Text } from 'react-native'

import cross from '../utils/cross'

const BreadWeb = ({ children }) => (
  <div>
    <p>Top layer web bread</p>
    { children }
    <p>Bottom layer web bread</p>
  </div>
)

const BreadNative = ({ children }) => (
  <View>
    <Text>Top layer native bread</Text>
    { children }
    <Text>Bottom layer native bread</Text>
  </View>
)

export default cross(BreadWeb, BreadNative)
