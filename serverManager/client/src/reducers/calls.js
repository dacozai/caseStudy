import { GET_FUNDS, GET_REQUESTS } from "../actions/types.js";

const initialState = {
  funds: {
    column: [],
    data: []
  },
  callRequest: {
    date: "",
    name: "",
    amount: ""
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
    default:
      return state;
  }
}
