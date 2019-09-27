import React, { Component } from "react";
import "./App.css";
import FirstListItem from './Components/FirstListItem';
import SecondListItem from './Components/SecondListItem';
import ThirdListItem from './Components/ThirdListItem';
import FourthListItem from './Components/FourthListItem';
import FifthListItem from './Components/FifthListItem';
import AddListItem from './Components/AddListItem';

class App extends Component {
  constructor(){
    super()

    const list = ['learn html', 'learn css', 'learn JS', 'learn React', 'learn React again:)']


    this.state = {
      list
    }
  }



handleInput = (val) => {
  let copy = [...this.state.list]
  copy[4] = val
  
  this.setState({
    list: copy
  })
}

  render() {
    return (
      <div className="App">
        <FirstListItem item1={this.state.list[0]}/>
        <SecondListItem item2={this.state.list[1]}/>
        <ThirdListItem item3={this.state.list[2]}/>
        <FourthListItem item4={this.state.list[3]}/>
        <FifthListItem item5={this.state.list[4]}/>  
        <AddListItem handleInput={this.handleInput}/>      
      </div>
    );
  }
}

export default App;
