// import React, { Component } from "react";
// import "./App.css";
// import List from './Components/List';
// import NewTask from './Components/NewTask';

// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       // This array is the list where all our input (our 'to-dos') will be stored to be displayed.
//       list: []
//     }
//     this.handleAddTask = this.handleAddTask.bind(this)
//   }

//   // This method is updating the 'list' array with a value (stored in parameter 'task') that is received from the component NewTask. 
//   handleAddTask(task) {
//     this.setState({ list: [...this.state.list, task] })
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>My To-do list:</h1>
//         <NewTask add={this.handleAddTask}/>
//         <List tasks={this.state.list}/>
//       </div>
//     );
//   }
// }

// export default App;


import React, {useState, useEffect} from 'react';
import NewTask from './Components/NewTask';
import List from './Components/List';

const App = () => {
  const [list, setList] = useState(['some task', 'another task'])

  const [task, setTask] = useState('')
    
  const updateTask = (e) => {
    setTask(e.target.value)
  }

  const addTask = () => {
    list.push(task)
    setTask('')
  }
 

  return(
    <div>
      <h1>My to-do list</h1>
      <NewTask updateTask={updateTask} addTask={addTask} task={task}/>
      <List list={list}/>

    </div>
  )
}

export default App