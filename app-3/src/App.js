// import React, { Component } from "react";
// import "./App.css";

// class App extends Component {
//   constructor(){
//     super()
//     this.state = {
//       list: ['Apple', 'Google', 'Samsung', 'Nokia', 'LG']
//     }
//   }

//   handleList() {
    
//   }

//   render() {
//     return (
//       <div className="App">
      
//       </div>
//     );
//   }
// }

// export default App;


import React, {useState, useEffect} from 'react';

const App = () => {
  const [list, setList] = useState(['pie', 'cake', 'chicken', 'pudding'])
  const [filteredList, setFilteredList] = useState('')

  let listToFilter = list.filter(element => {
    return element.includes(filteredList)
  }).map((e, i) => {
    return <h2 key={i}>{e}</h2>
  })

  const filterList = (e) => {
    setFilteredList(e.target.value)
  }

  return(
    <div>
      <input onChange={e => filterList(e)}/>

      {listToFilter}
    </div>
  )
}

export default App