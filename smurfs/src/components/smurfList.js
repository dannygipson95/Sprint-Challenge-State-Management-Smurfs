import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getSmurfs} from '../actions/getSmurfs'
import Smurf from './smurf'

const SmurfList = props =>{
    useEffect(
         () =>{
            props.getSmurfs()
    }, [])

    return(
        <div>
            {props.smurfs.map(smurf=>{
                return(
                    <Smurf smurf={smurf}/>
                )
            })}
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {getSmurfs})(SmurfList);