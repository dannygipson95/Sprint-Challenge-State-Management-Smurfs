import React from 'react'

import {connect} from 'react-redux'

import {deleteSmurf} from '../actions/deleteSmurf'

const Smurf = props =>{
    const {smurf} = props

    const onClick = event =>{
        event.preventDefault();
        props.deleteSmurf(smurf);
    }
    return(
        <div style={{border: '2px solid black', width: '50%', margin:'2% 25%'}}>
            <h1>{smurf.name}</h1>
            <h4>Age: {smurf.age}</h4>
            <h4>Height: {smurf.height}</h4>
            <button onClick={onClick}>Delete</button>
        </div>
    )
}

export default connect(null, {deleteSmurf})(Smurf);