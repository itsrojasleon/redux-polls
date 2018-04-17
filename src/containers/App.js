import React, { Component } from 'react'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'

class App extends Component {
  state = {

  }

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>Starter Code</div>
    )
  }
}
export default connect()(App)
