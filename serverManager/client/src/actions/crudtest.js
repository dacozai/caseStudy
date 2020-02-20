import axios from "axios";

import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from "./types";

// GET LEADS
export const getData = () => dispatch => {
  axios
    .get("/api/test")
    .catch(err => console.log(err))
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payload: res.data
      });
    });
};

// DELETE LEADS
export const deleteData = id => dispatch => {
  axios
    .delete(`/api/test/${id}/`)
    .catch(err => console.log(err))
    .then(res => {
      dispatch({
        type: DELETE_LEAD,
        payload: id
      });
    });
};

// ADD LEADS
export const addData = lead => dispatch => {
  axios
    .post("/api/test/", lead)
    .catch(err => console.log(err))
    .then(res => {
      dispatch({
        type: ADD_LEAD,
        payload: res.data
      });
    });
};
