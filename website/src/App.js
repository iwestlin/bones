import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './routers/Home'
import NotFound from './routers/NotFound'

export default class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
