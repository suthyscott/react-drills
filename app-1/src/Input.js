import React from 'react'

export default function Input(props) {
        console.log(props)
        return(
            <div>
                <input onChange={(e) => props.handleInputText(e.target.value)} type="text"/>
                
            </div>
        )

}