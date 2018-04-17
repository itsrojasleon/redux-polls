import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {
  state = {
    showAnswered: false
  }

  handleShowUnanswered = () => {
    this.setState(() => ({
      showAnswered: false
    }))
  }
  handleShowAnswered = () => {
    this.setState(() => ({
      showAnswered: true
    }))
  }
  render() {
    const { showAnswered } = this.state
    const { answered, unanswered } = this.props

    const list = showAnswered === true
      ? answered
      : unanswered

    return (
      <div>
        <div className="dashboard-toggle">
          <button
            style={{ textDecoration: showAnswered === false ? 'underline' : null }}
            onClick={this.handleShowUnanswered}
          >
            Unanswered
          </button>
          <span> | </span>
          <button
            style={{ textDecoration: showAnswered === true ? 'underline' : null }}
            onClick={this.handleShowAnswered}
          >
            Answered
          </button>
        </div>
        <ul className="dashboard-list">
          {list.map((poll) => (
            <li key={poll.id}>
              {poll.question}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users, polls }) {
  const answers = users[authedUser].answers

  const answered = answers.map((id) => polls[id])
    .sort((a,b) => b.timestamp - a.timestamp)

  const unanswered = Object.keys(polls)
    .filter((id) => !answers.includes(id))
    .map((id) => polls[id])
    .sort((a,b) => b.timestamp - a.timestamp)

  return {
    answered,
    unanswered
  }
}

export default connect(mapStateToProps)(Dashboard)
