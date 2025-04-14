import React, { Component } from 'react'

class Form extends Component {

  constructor(props) {
    super(props)

    this.state = {
      username: '',
      comments: '',
      select: ''
    }
  }

  onEventHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  onCommentEventHandler = event => {
    this.setState({
      comments: event.target.value
    })
  }

  onSelectEventHandler = event => {
    this.setState({
      select: event.target.value
    })
  }

  onHandleSubmit = event => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.select}`)
    event.preventDefault()
  }

  render() {
    const {username,comments,select}= this.state
    return (
      <form onSubmit={this.onHandleSubmit}>
        <div>
          <label>Username  </label>
          <input
            type='Username'
            value={username}
            onChange={this.onEventHandler}
          />
        </div>
        <div>
          <label>Comments  </label>
          <textarea
            type='Comments'
            value={comments}
            onChange={this.onCommentEventHandler}
          ></textarea>
        </div>
        <div>
          <label>Select  </label>
          <select value={select}
            onChange={this.onSelectEventHandler}
          >
            <option value={'React'}>React</option>
            <option value={'Angular'}>Angular</option>
            <option value={'Vanilla'}>Vanilla</option>
          </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form