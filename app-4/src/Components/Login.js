// import React, {Component} from 'react';

// export default class Login extends Component {
//     constructor () {
//         super();
//         this.state = {
//             username: '',
//             password: ''
//         }
//     }

//     receiveUsername = (input) => {
//         this.setState({
//             username: input
//         })
//     }

//     receivePassword = (input) => {
//         this.setState({
//             password: input
//         })
//     }

//     alertUser = () => {
//         alert(`Username: ${this.state.username} password: ${this.state.password}` )
//     }

//     render() {
//         return(
//             <div>
//                 <input onChange={ (e) => this.receiveUsername(e.target.value)}/>
//                 <input onChange={ (e) => this.receivePassword(e.target.value)}/>
//                 <button onClick={ (e) => this.alertUser()}> Login </button>
//             </div>
//         )
//     }

// }

import React, {useState} from 'react';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return(
        <div>
            <input onChange={e => setUsername(e.target.value)} />
            <input onChange={e => setPassword(e.target.value)} />
            
            <button onClick={() => alert(`Username: ${username} Password: ${password}`)}>Login</button>
        </div>
    )
}

export default Login