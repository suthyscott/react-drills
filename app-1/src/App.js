import React, { Component } from "react";
import "./App.css";

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
        {/* Why is there a type="text"? I don't see what it's doing.  */}
        <input onChange={(e) => this.handleInputText(e.target.value)} type="text"/>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default App;
