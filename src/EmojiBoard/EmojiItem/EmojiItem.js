import './EmojiItem.css'
import React, { Component } from 'react'

export default class EmojiItem extends Component {
  render() {
    return <div className="emoji-item">{this.props.value}</div>
  }
}
