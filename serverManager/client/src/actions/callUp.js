import axios from "axios";

import { GET_FUNDS } from "./types";

// GET FUNDS
export const getFunds = () => dispatch => {
  axios
    .get("/api/fund/")
    .catch(err => console.log(err))
    .then(res => {
      var columns = [
        { dataField: "date", text: "Date" },
        { dataField: "call", text: "Call #" }
      ];
      for (let i=0;i< res.data.length; i++) {
        let elem = res.data[i]; 
        columns.push({dataField: elem.name.replace(/[ ,]+/g, "_"), text: elem.name});
      }

      dispatch({
        type: GET_FUNDS,
        payload: res.data
      });
    });
};


