import React, { Component } from "react";
import "./App.css";
import Todo from './Components/Todo'

class App extends Component {
  constructor(){
    super();
    this.state = {
      list: [],
      input: ''
    }
    this.handleAddTask = this.handleAddTask.bind(this);
  }


  // This method is taking the input from the input box and making it the value of this.state.input.
  handleInputChange(value) {
    this.setState({ input: value })
  }


    // This method is taking both previously entered input (which has been stored in the array list) and new input taken from handleInputChange, spreading the old value of 'list' and adding the new input. 
  handleAddTask() {
    this.setState({ 
      list:[...this.state.list, this.state.input],
      input: ""
    })
  }

  render() {
    // creating a block scoped variable 'list' that maps the array this.state.list and returns the component Todo, to which it is passing element and index as props. 
    let list = this.state.list.map((e, i) => {
      // key={i} is just assigning each element in the list a unique key so that React's virtual DOM can correspond the elements with the actual DOM. 
      return <Todo key={i} task={e} /> 
    })

    return (
      <div className="App">
        <h1>My to-do list:</h1>

          <div>
            <input 
              placeholder="Enter new task" 
              onChange={e => this.handleInputChange(e.target.value)}
              value={this.state.input}/>
         
        <button onClick={this.handleAddTask}>Add</button>

         </div>

        <br/>

        {/* here we're escaping the element and inserting the array 'list' */}
        {list}
      </div>
    );
  }
}

export default App;
