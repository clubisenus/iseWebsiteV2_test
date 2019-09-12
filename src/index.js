import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
//material-ui stuff
import { ThemeProvider } from '@material-ui/styles';
//pages for react-router-dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <div>
      <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={AboutUs} />
          </Switch>
      </Router>
    </div>
  </Provider>,
  document.getElementById('root')
)
