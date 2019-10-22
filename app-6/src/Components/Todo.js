// import React, {Component} from 'react';

// export default function Todo (props) {

//         // Creating the paragraph that contains the list items, received from this.props.task, which is the current element (being looped over by .map) in the array 'list'. 
//         return (
//         <p>{props.element}</p>
//         )
    
// }

import React, {useState} from 'react';

const Todo = (props) => (
        <div>
                {props.task}
        </div>
)

export default Todo