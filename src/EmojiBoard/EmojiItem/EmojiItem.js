import './EmojiItem.css'
import React, { Component } from 'react'

export default class EmojiItem extends Component {
  constructor(props) {
    super(props)
  }

  handleEmojiClick() {
    this.props.handleEmojiClick(this.props.value)
  }

  render() {
    return (
      <div className="emoji-item" onClick={() => this.handleEmojiClick()}>
        {this.props.value}
      </div>
    )
  }
}
