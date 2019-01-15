import React, { Component } from 'react'
import './App.css'
import EmojiSelector from './EmojiSelector/EmojiSelector'

class App extends Component {
  constructor(props) {
    super(props)
    this.testInput = React.createRef()
  }

  render() {
    return (
      <div className="App">
        <input
          className="emoji-input"
          ref={this.testInput}
        />
        <EmojiSelector inputRef={this.testInput} iconSize={18} />
      </div>
    )
  }
}

export default App
