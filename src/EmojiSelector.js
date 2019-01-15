import EmojiList from './emojiList.json'
import React, { Component } from 'react'
import './EmojiSelector.css'

class EmojiSelector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchKey: '',
      emojiList: EmojiList
    }
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
        <input className="emoji-search-input"></input>
        {/* <EmojiBoard emojiList={searchResult}/> */}
      </div>
    )
  }
}

export default EmojiSelector
