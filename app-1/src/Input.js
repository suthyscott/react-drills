import React, {Component} from 'react'

export default class Input extends Component {
    render() {
        console.log(this.props)
        return(
            <div>
                <input onChange={(e) => this.props.handleInputText(e.target.value)} type="text"/>
                
            </div>
        )
    }
}