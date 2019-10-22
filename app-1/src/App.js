import React, {useState, useEffect} from 'react';

const App = () => {
  const [list, setList] = useState([])

  return(
    <div>
      <input onChange={e => setList(e.target.value)}/>
      {list}
    </div>
  )
}
export default App