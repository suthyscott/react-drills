import React from 'react'

export default function AddListItem(props) {
   
        return(
            <div>
                <h2>{props.item1}</h2>

                <input onChange={ (e) => props.handleInput(e.target.value)}/>
            </div>
        )
   
}