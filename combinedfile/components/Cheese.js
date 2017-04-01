import React from 'react'
import { Text } from 'react-native'

import cross from '../utils/cross'

const CheeseWeb = () => <p>Cheese web</p>
const CheeseNative = () => <Text>Cheese native</Text>

export default cross(CheeseWeb, CheeseNative)
