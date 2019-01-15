import EmojiList from './emojiList.json'
import React, { Component } from 'react'
import './EmojiSelector.css'
import EmojiBoard from './EmojiBoard/EmojiBoard.js'

class EmojiSelector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchKey: '',
      emojiList: EmojiList,
      showEmojiBoard: false
    }
    this.handleEmojiClick = this.handleEmojiClick.bind(this)
  }

  handleEmojiClick(emojiSymbol) {
    console.log('change input value with: ' + emojiSymbol)
    let originVal = this.props.inputRef.current.value
    this.props.inputRef.current.value = originVal + emojiSymbol
  }

  handleEmojiIconClick() {
    const newState = {
      showEmojiBoard: !this.state.showEmojiBoard
    }
    this.setState(newState)
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
      <div
        className="emoji-selector"
        onClick={() => this.handleEmojiIconClick()}
      >
        <div className="emoji-icon">😁</div>

        <div
          className="emoji-board-card"
          style={{
            display: this.state.showEmojiBoard ? 'block' : 'none'
          }}
        >
          <input className="emoji-search-input" placeholder="input keyword" />
          <EmojiBoard
            emojiList={searchResult}
            handleEmojiClick={this.handleEmojiClick}
          />
        </div>
      </div>
    )
  }
}

export default EmojiSelector
