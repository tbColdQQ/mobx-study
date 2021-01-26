import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import App from './App'
import AppleStore from './stores/apple'
import './styles/appleBasket.scss'
import './styles/appleItem.scss'

const apple = new AppleStore()

ReactDOM.render(
  <Provider apple={apple}><App /></Provider>,
  document.getElementById('root')
)
