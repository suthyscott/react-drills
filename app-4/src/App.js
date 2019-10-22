// import React, { Component } from "react";
// import "./App.css";
// import Login from './Components/Login'

// class App extends Component {
//   render() {
//     return (
//       <div className="main">
//         <Login />
//       </div>
//     );
//   }
// }

// export default App;


import React, {useState} from 'react';
import Login from './Components/Login';

const App = () => {
  return(
    <div>
      <Login />
    </div>
  )
}

export default App