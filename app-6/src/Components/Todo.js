import React, {Component} from 'react';

export default class Todo extends Component{
    
    render(){
        // Creating the paragraph that contains the list items, received from this.props.task, which is the current element (being looped over by .map) in the array 'list'. 
        return <p>{this.props.task}</p>
    }
}