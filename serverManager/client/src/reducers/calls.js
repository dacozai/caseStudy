import {
  GET_FUNDS,
  GET_REQUESTS,
  GET_COMMITS,
  GET_RESULT,
  ADD_DATA
} from "../actions/types.js";

const initialState = {
  funds: {
    column: [],
    data: []
  },
  callRequest: {
    date: "",
    name: "",
    amount: ""
  },
  commits: {
    column: [],
    data: [],
    finalTable: []
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_FUNDS:
      return {
        ...state,
        funds: action.payload
      };
    case GET_REQUESTS:
      return {
        ...state,
        callRequest: action.payload
      };
    case GET_COMMITS:
      return {
        ...state,
        commits: action.payload
      };
    case GET_RESULT:
      return {
        ...state,
        commits: action.payload
      };
    case ADD_DATA:
      return {
        ...state,
        commits: action.payload
      };
    default:
      return state;
  }
}
