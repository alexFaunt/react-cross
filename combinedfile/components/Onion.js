import React from 'react'
import { Text } from 'react-native'

import cross from '../utils/cross'

const OnionWeb = () => <p>Onion web</p>
const OnionNative = () => <Text>Onion native</Text>

export default cross(OnionWeb, OnionNative)
