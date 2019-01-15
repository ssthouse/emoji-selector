import EmojiList from './emojiList.json'
import React, { Component } from 'react'
import './EmojiSelector.css'
import EmojiBoard from './EmojiBoard/EmojiBoard.js'

class EmojiSelector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchKey: '',
      emojiList: EmojiList
    }
    this.handleEmojiClick = this.handleEmojiClick.bind(this)
  }

  handleEmojiClick(emojiSymbol) {
    console.log('change input value with: ' + emojiSymbol)
    let originVal = this.props.inputRef.current.value
    this.props.inputRef.current.value = originVal + emojiSymbol
  }

  render() {
    let searchResult
    if (this.state.searchKey === '') {
      searchResult = this.state.emojiList
    } else {
      searchResult = this.state.emojiList.filter(emojiItem => {
        return emojiItem.keywords.indexOf(this.state.searchKey) !== -1
      })
    }

    return (
      <div className="emoji-selector">
        <span>emoji selector</span>
        <input className="emoji-search-input" />
        <EmojiBoard
          emojiList={searchResult}
          handleEmojiClick={this.handleEmojiClick}
        />
      </div>
    )
  }
}

export default EmojiSelector
