// import React, {Component} from 'react';

// export default class Image extends Component {
  

//     render(){
//         console.log(this.props)
//         return(
//             <div>
//                 <img src={this.props.image}  alt="Sokka"/>
//             </div>
//         )
//     }

// }

import React, {useState} from 'react';

const Image = (props) => (
    // console.log(props)
    <div>
        <img src={props.image} alt='Sokka'/>
    </div>
)

export default Image