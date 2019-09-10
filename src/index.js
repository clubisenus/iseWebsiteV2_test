import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
//import App from './components/App'
import rootReducer from './reducers'
//import SideBar from './components/Sidebar'

const store = createStore(rootReducer)
/*
render(
  <Provider store={store}>
  </Provider>,
  document.getElementById('root')
)*/
