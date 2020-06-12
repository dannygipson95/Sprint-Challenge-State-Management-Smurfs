import React from 'react'

const Smurf = props =>{
    const {smurf} = props
    return(
        <div style={{border: '2px solid black', width: '50%', margin:'2% 25%'}}>
            <h1>{smurf.name}</h1>
            <h4>Age: {smurf.age}</h4>
            <h4>Height: {smurf.height}</h4>
        </div>
    )
}

export default Smurf;