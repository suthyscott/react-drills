// import React, { Component } from "react";
// import "./App.css";
// import Image from './Components/Image'




// class App extends Component {

  


//   render() {
//     return (
//       <div className="App">
//         <Image image={"https://amandajmcgeecom.files.wordpress.com/2018/09/sokka.png?w=736"}/>
//       </div>
//     );
//   }
// }

// export default App;


import React, {useState} from 'react';
import Image from './Components/Image'

const App = () => {
  const [image, setImage] = useState('https://amandajmcgeecom.files.wordpress.com/2018/09/sokka.png?w=736')

  return(
    <div>
      <Image image={image}/>
    </div>
  )
}

export default App