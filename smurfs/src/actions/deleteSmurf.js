import axios from 'axios';
import {SET_ERROR} from './getSmurfs';

export const DELETE_SMURF = 'DELETE_SMURF';
export const REMOVE_SMURF = 'REMOVE_SMURF';

export const deleteSmurf = smurf => dispatch=>{
    dispatch({
        type: DELETE_SMURF
    });
    axios.delete(`http://localhost:3333/smurfs/${smurf.id}`)
    .then(res => {
        console.log(res.data);
        dispatch({ type: REMOVE_SMURF, payload: res.data})
    })
    .catch(err=>{
        console.error('error fetching data err'. err);
        dispatch({ type: SET_ERROR, payload: 'error fetching data'})
    })
}