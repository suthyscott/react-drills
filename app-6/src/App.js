// import React, { Component } from "react";
// import "./App.css";
// import Todo from './Components/Todo'

// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       list: [],
//       input: ''
//     }
    
//   }

//   handleChange = (e) => {
//     const {name, value} = e.target
//     this.setState({
//       [name]: value
//     })
//   }

//   addToDo = input => {
//     this.state.list.push(input)
//     this.setState({
//       input: ''
//     })
//   }

//   render() {
  
//     return (
//       <div className="App">
//         <h1>My to-do list:</h1>
//         {/* the name of the input references the property on state, so that if we had multiple inputs our function above could reference whichever one had fired it and update the corresponding property on state.  */}
//         <input 
//         name='input' 
//         value={this.state.input} 
//         placeholder='Enter new task'
//         onChange={e => this.handleChange(e)}/>
//         <button onClick={() => this.addToDo(this.state.input)}>Add</button>
//         {this.state.list.map((e, i) => {
//           return <Todo element={e} key={`Todo item ${i}`}/>
//         })}
//       </div>
//     );
//   }
// }

// export default App;

import React, {useState} from 'react';
import Todo from './Components/Todo';

const App = () => {
  const [list, setList] = useState(['stuff', 'more stuff'])
  const [item, setItem] = useState('')

  const addToList = () => {
    list.push(item)
    setItem('')
  }

  return(
    <div>
      <h1>My to-do list</h1>
      <input onChange={e => setItem(e.target.value)} placeholder='Enter new task' value={item}></input>
      <button onClick={() => addToList()}>Add</button>
      {list.map(e => {
        return <Todo task={e}/>
      })}
    </div>
  )
}

export default App