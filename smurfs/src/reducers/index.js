import {GET_SMURFS, UPDATE_SMURFS, SET_ERROR} from '../actions/getSmurfs'
import {POST_SMURF, ADD_SMURF} from '../actions/postSmurf'
const initialState = {
    smurfs: [],
    isFetchingData: false,
    newSmurf: {},
    error: ''
}

export const reducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_SMURFS:
            return{
                ...state,
                isFetchingData: true,
            }
        case UPDATE_SMURFS:
            return{
                ...state,
                isFetchingData: false,
                smurfs: action.payload
            }
        case POST_SMURF:
            return{
                ...state,
                isFetchingData: true
            }
        case ADD_SMURF:
            return{
                ...state,
                isFetchingData: false,
                smurfs: [...state.smurfs, action.payload]
            }
        case SET_ERROR:
            return{
                ...state,
                isFetchingData: false,
                error: action.payload
            }
        default:
            return state;
    }
}