import React, { Component } from 'react'
import './EmojiBoard.css'
import EmojiItem from './EmojiItem/EmojiItem'

export default class EmojiBoard extends Component {
  constructor(props) {
    super(props)
    this.handleEmojiClick = this.handleEmojiClick.bind(this)
  }

  handleEmojiClick(emojiSymbol) {
    this.props.handleEmojiClick(emojiSymbol)
  }

  render() {
    return (
      <div className="emoji-board">
        {this.props.emojiList.map(emojiItem => {
          return (
            <EmojiItem
              value={emojiItem.symbol}
              key={emojiItem.title}
              handleEmojiClick={this.handleEmojiClick}
            />
          )
        })}
      </div>
    )
  }
}
