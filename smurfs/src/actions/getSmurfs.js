import axios from 'axios'

export const GET_SMURFS = 'GET_SMURFS';
export const UPDATE_SMURFS = 'UPDATE_SMURFS';
export const SET_ERROR = 'SET_ERROR';

export const getSmurfs = () => dispatch=>{
    dispatch({
        type: GET_SMURFS
    });
    axios.get('http://localhost:3333/smurfs')
    .then(res=> {
        console.log(res.data);
        dispatch({ type: UPDATE_SMURFS, payload: res.data});
    })
    .catch(err=>{
        console.error('error fetching data err', err);
        dispatch({ type: SET_ERROR, payload: 'error fetching data'});
    })
}