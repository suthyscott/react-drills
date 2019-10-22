// import React, {Component} from 'react';
// import Todo from './Todo';

// export default class List extends Component {
//     render(){
//         let list = this.props.tasks.map((element, index) => {
//             return <Todo key={index} task={element} />
//         });

//         return <div>{list}</div>
//     }
// }

import React, {useState} from 'react';
import Todo from './Todo';

const List = (props) => {


    return(
        <div>
            {props.list.map((e, i) => {
                return <Todo key={i} task={e}/>
            })}
        </div>
    )
}

export default List