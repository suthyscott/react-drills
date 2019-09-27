import React, { Component } from "react";
import "./App.css";
import Input from './Input'
import Text from './Text'

class App extends Component {

  constructor() {
    super()

    this.state = {
      text: ""
    }    

  }

  handleInputText = (value) => {
    this.setState({
      text: value
    })
  } 
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Input handleInputText={this.handleInputText}/>
        <Text text={this.state.text}/>
      </div>
    );
  }
}

export default App;
