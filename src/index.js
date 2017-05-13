import '../style/main.scss'

import React from 'react'
import { render } from 'react-dom'
import App from './components/App'

console.log(App())

render(<App />, document.getElementById('app'))