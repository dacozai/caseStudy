import axios from "axios";

import { GET_FUNDS, GET_REQUESTS } from "./types";

// GET FUNDS
export const getFunds = () => dispatch => {
  const reqOne = axios.get("/api/fund/");
  const reqTwo = axios.get("/api/call/");
  const reqThree = axios.get("/api/fundinvest/");

  axios
    .all([reqOne, reqTwo, reqThree])
    .catch(err => console.log(err))
    .then(axios.spread((...response) => {
      let fund = response[0].data;
      let call = response[1].data;
      let fundInvest = response[2].data;

      let obj = {column: [
        { dataField: "date", text: "Date" },
        { dataField: "call", text: "Call #" }
      ]};
      var [tmpColName, fundTitleObj] = buildFundColumnName(fund); 
      obj.column = obj.column.concat(tmpColName);
      obj.data = dashBoardData(obj.column, fundTitleObj, call, fundInvest); 

      dispatch({
        type: GET_FUNDS,
        payload: obj
      });
    }));
  
    let dashBoardData = (title, fundKey, call, invest) => {
      let content = [];
      const intiObj = initBoardObj(title);
      for (let i=0;i<call.length;i++) {
        let tmpObj = intiObj;
        tmpObj.date = call[i].date; 
        tmpObj.call = call[i].call_id;
        //search by call_id
        for (let j=0;j<invest.length;j++) {
          if (invest[j].call_id == call[i].call_id) {
            let key = fundKey[invest[j].fund_id];
            tmpObj[key] = Number(invest[j].invest_amount);
          }
        }
        content.push(tmpObj);
      }
      return content; 
    }

    let initBoardObj = title => {
      let obj = {};
      for (let i=0;i<title.length;i++) {
        obj[title[i].dataField] = null;
      }
      return obj;
    } 

    let buildFundColumnName = fund => {
      let columns = [];
      let fundTitle = {};
      for (let i=0;i< fund.length; i++) {
        let elem = fund[i]; 
        let builtKey = nameToKey(elem.name);
        columns.push({dataField: builtKey,text: elem.name});
        fundTitle[elem.fund_id] = builtKey;
      }
      return [columns, fundTitle]; 
    }

    let nameToKey = name => {
      return name.replace(/[ ,]+/g, "_");
    }

};

export const onChangeRequest = () => dispatch => {

}

