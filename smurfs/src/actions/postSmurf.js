import axios from 'axios'
import {SET_ERROR} from './getSmurfs'

export const POST_SMURF = 'POST_SMURF';
export const ADD_SMURF = 'ADD_SMURF';

export const postSmurf = smurf => dispatch=>{
    dispatch({
        type: POST_SMURF
    });
    axios.post('http://localhost:3333/smurfs', smurf)
    .then(res=> {
        console.log(res.data);
        dispatch({ type: ADD_SMURF, payload: smurf});
    })
    .catch(err=>{
        console.error('error fetching data err', err)
        dispatch({ type: SET_ERROR, payload: 'error fetching data'})
    })
}