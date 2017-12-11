import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from '../Landing'
import Styleguide from '../Styleguide'

import '../../assets/scss/style.scss'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={ '/' }
            render={ (props) => <Landing
              { ...this.props }
              { ...props }
                                /> }
          />

          <Route
            exact
            path={ '/styleguide' }
            render={ (props) => <Styleguide
              { ...this.props }
              { ...props }
                                /> }
          />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
