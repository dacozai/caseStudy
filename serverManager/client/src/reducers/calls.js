import { GET_FUNDS } from '../actions/types.js';

const initialState = {
  funds: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_FUNDS:
      return {
        ...state,
        funds: action.payload
      };
    default:
      return state;
  } 
}
