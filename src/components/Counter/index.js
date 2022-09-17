import {Component} from 'react'
import {v4} from 'uuid'

import CounterItem from '../CounterItem'

import './index.css'

class Counter extends Component {
  state = {
    nameInput: '',
    commentInput: '',
    commentsList: [],
  }

  renderCommentsList = () => {
    const {commentsList} = this.state

    return commentsList.map(eachComment => (
      <CounterItem key={eachComment.id} commentDetails={eachComment} />
    ))
  }

  onAddComment = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state
    const newComment = {
      id: v4(),
      name: nameInput,
      comment: commentInput,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  onChangeCommentInput = event => {
    this.setState({
      commentInput: event.target.value,
    })
  }

  onChangeNameInput = event => {
    this.setState({
      nameInput: event.target.value,
    })
  }

  render() {
    const {nameInput, commentsList} = this.state

    return (
      <div className="app-container">
        <div className="left-side">
          <h1 className="heading">Count the characters like a Boss</h1>
          {commentsList.length > 0 ? (
            <ul className="comments-list">{this.renderCommentsList()}</ul>
          ) : (
            <div>
              <img
                alt="no user inputs"
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                className="no-users"
              />
            </div>
          )}
        </div>
        <div className="right-side">
          <h1 className="app-heading">Character Counter</h1>
          <div className="comments-inputs">
            <form className="form" onSubmit={this.onAddComment}>
              <input
                type="text"
                className="name-input"
                placeholder="Enter the Characters here"
                value={nameInput}
                onChange={this.onChangeNameInput}
              />
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Counter
