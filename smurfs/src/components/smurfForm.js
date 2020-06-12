import React, {useState} from 'react'
import {connect} from 'react-redux'
import {postSmurf} from '../actions/postSmurf'

const initialVals = {
    name: '',
    age: '',
    height: ''
}

const formStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
}

const SmurfForm = props =>{
    const [formVals, setFormVals] = useState(initialVals)

    const onSubmit = event =>{
        event.preventDefault()
        props.postSmurf(formVals);
        setFormVals(initialVals);
    }
    const changeHandler = event =>{
        const name = event.target.name;
        const value = event.target.value;

        setFormVals({
            ...formVals,
            [name]: value
        })
    }
    return(
        <form style={formStyles} onSubmit={onSubmit}>
            <label for='name'>
                name 
                <input
                    type='text'
                    name='name'
                    id='name'
                    value={formVals.name}
                    onChange={changeHandler}
                />
            </label>
            <label for='age'>
                age 
                <input
                    type= 'number'
                    name= 'age'
                    id= 'age'
                    value={formVals.age}
                    onChange={changeHandler}
                />
            </label>
            <label for='height'>
                height 
                <input
                    type='text'
                    name='height'
                    id='height'
                    value={formVals.height}
                    onChange={changeHandler}
                />
            </label>
            <button>Submit</button>
        </form>
    )
}

export default connect(null, {postSmurf})(SmurfForm);