import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import AppType from './utils/AppType'

render(<AppType type="web"><App /></AppType>, document.getElementById('app'))
