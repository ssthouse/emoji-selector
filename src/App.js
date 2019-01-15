import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import EmojiSelector from './EmojiSelector'

class App extends Component {
  constructor(props) {
    super(props)
    this.testInput = React.createRef()
  }

  render() {
    return (
      <div className="App">
        <input
          style={{ width: '100px', height: '100px' }}
          ref={this.testInput}
        />
        <EmojiSelector inputRef={this.testInput} />
      </div>
    )
  }
}

export default App
