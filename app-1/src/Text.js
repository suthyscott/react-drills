import React, {Component} from 'react'

export default class Text extends Component {
    render(){
        return(
            <div>
                <p>{this.props.text}</p>
            </div>
        )
    }
}