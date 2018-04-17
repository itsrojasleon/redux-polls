import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddPoll } from '../actions/polls'

class AddPoll extends Component {
  state = {
    question: '',
    a: '',
    b: '',
    c: '',
    d: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // Redirect to /

    this.props.dispatch(handleAddPoll(this.state))
  }

  handleInputChange = (e) => {
    const { value, name } = e.target

    this.setState(() => ({
      [name]: value
    }))
  }

  isDisabled = () => {
    const { question, a, b, c, d } = this.state

    return question === ''
      || a === ''
      || b === ''
      || c === ''
      || d === ''
  }

  render() {
    const { question, a, b, c, d } = this.state
    return (
      <form className="add-form" onSubmit={this.handleSubmit}>
        <h3 style={{ marginBottom: 5 }}>What is your question?</h3>
        <input
          value={question}
          onChange={this.handleInputChange}
          name='question'
          className="input"
          type="text"
        />
        <h3>What are the options?</h3>
        <label className="label" htmlFor="a">A.</label>
        <input
          value={a}
          onChange={this.handleInputChange}
          name="a"
          className="input"
          type="text"
          id="a"
        />
        <label className="label" htmlFor="b">B.</label>
        <input
          value={b}
          onChange={this.handleInputChange}
          name="b"
          className="input"
          type="text"
          id="b"
        />
        <label className="label" htmlFor="c">C.</label>
        <input
          value={c}
          onChange={this.handleInputChange}
          name="c"
          className="input"
          type="text"
          id="c"
        />
        <label className="label" htmlFor="d">D.</label>
        <input
          value={d}
          onChange={this.handleInputChange}
          name="d"
          className="input"
          type="text"
          id="d"
        />
        <button className="btn" type="submit" disabled={this.isDisabled()}>Submit</button>
      </form>
    )
  }
}
export default connect()(AddPoll)