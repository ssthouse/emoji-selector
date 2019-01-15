import EmojiList from './emojiList.json'
import React, { Component } from 'react'
import './EmojiSelector.css'
import EmojiBoard from '../EmojiBoard/EmojiBoard.js'

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
    let originVal = this.props.inputRef.current.value
    this.props.inputRef.current.value = originVal + emojiSymbol
  }

  handleEmojiIconClick() {
    const newState = {
      showEmojiBoard: !this.state.showEmojiBoard,
      searchKey: ''
    }
    this.setState(newState)
  }

  handleSearchKeyChange(e) {
    const newSearchKey = e.target.value
    this.setState({
      searchKey: newSearchKey
    })
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
        <div
          className="emoji-icon"
          style={{
            fontSize: `${this.props.iconSize}px`,
            width: `${this.props.iconSize}px`,
            height: `${this.props.iconSize}px`
          }}
          onClick={() => this.handleEmojiIconClick()}
        >
          <span>😁</span>
        </div>

        <div
          className="emoji-board-card"
          style={{
            display: this.state.showEmojiBoard ? 'block' : 'none'
          }}
        >
          <input
            className="emoji-search-input"
            onChange={e => this.handleSearchKeyChange(e)}
            placeholder="input keyword"
          />
          <EmojiBoard
            emojiList={searchResult}
            handleEmojiClick={this.handleEmojiClick}
          />
        </div>
      </div>
    )
  }
}

EmojiSelector.defaultProps = {
  iconSize: 16
}

export default EmojiSelector
