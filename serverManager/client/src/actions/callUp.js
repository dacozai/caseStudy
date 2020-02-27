import axios from "axios";

import {
  GET_FUNDS,
  GET_REQUESTS,
  GET_COMMITS,
  GET_RESULT,
  ADD_DATA
} from "./types";

const buildFundColumnName = fund => {
  let columns = [];
  let fundTitle = {};
  for (let i = 0; i < fund.length; i++) {
    let elem = fund[i];
    let builtKey = nameToKey(elem.name);
    columns.push({ field: builtKey, title: elem.name });
    fundTitle[elem.fund_id] = builtKey;
  }
  return [columns, fundTitle];
};

const nameToKey = name => {
  return name.replace(/[ ,]+/g, "_");
};

const keyToName = name => {
  return name.replace(/[ _]+/g, " ");
};

const dateToYMDwSlash = varDate => {
  varDate = new Date(varDate);
  let Y = varDate.getFullYear().toString();
  let m = varDate.getMonth() + 1;
  m = parseInt(m) < 10 ? "0" + m.toString() : m;
  let d = varDate.getDate().toString();
  return Y + "/" + m + "/" + d;
};

// GET FUNDS
export const getFunds = () => dispatch => {
  const reqOne = axios.get("/api/fund/");
  const reqTwo = axios.get("/api/call/");
  const reqThree = axios.get("/api/fundinvest/");

  axios
    .all([reqOne, reqTwo, reqThree])
    .catch(err => console.log(err))
    .then(
      axios.spread((...response) => {
        let fund = response[0].data;
        let call = response[1].data;
        let fundInvest = response[2].data;

        let obj = {
          column: [
            { field: "date", title: "Date" },
            { field: "call", title: "Call #" }
          ],
          call_id: call.length
        };
        var [tmpColName, fundTitleObj] = buildFundColumnName(fund);
        obj.column = obj.column.concat(tmpColName);
        obj.data = dashBoardData(obj.column, fundTitleObj, call, fundInvest);

        dispatch({
          type: GET_FUNDS,
          payload: obj
        });
      })
    );

  let dashBoardData = (title, fundKey, call, invest) => {
    let content = [];
    const intiObj = initBoardObj(title);
    for (let i = 0; i < call.length; i++) {
      let tmpObj = intiObj;
      tmpObj.date = dateToYMDwSlash(call[i].date);
      tmpObj.call = call[i].call_id;
      //search by call_id
      for (let j = 0; j < invest.length; j++) {
        if (invest[j].call_id == call[i].call_id) {
          let key = fundKey[invest[j].fund_id];
          tmpObj[key] = Number(invest[j].invest_amount);
        }
      }
      content.push(tmpObj);
    }
    return content;
  };

  let initBoardObj = title => {
    let obj = {};
    for (let i = 0; i < title.length; i++) {
      obj[title[i].dataField] = null;
    }
    return obj;
  };
};

// onChangeRequest
export const onChangeRequest = event => (dispatch, getState) => {
  let preState = getState().callsReducer.callRequest;
  const target = event.target;
  const value = target.type === "checkbox" ? target.checked : target.value;
  const name = target.name;
  preState[name] = value;

  dispatch({
    type: GET_REQUESTS,
    payload: preState
  });
};

// Call Table
export const getCommitTable = () => dispatch => {
  const reqOne = axios.get("/api/fund/");
  const reqTwo = axios.get("/api/commit/");
  const reqThree = axios.get("/api/fundinvest/");

  axios
    .all([reqOne, reqTwo, reqThree])
    .catch(err => console.log(err))
    .then(
      axios.spread((...response) => {
        let fund = response[0].data;
        let commit = response[1].data;
        let invest = response[2].data;

        let obj = {
          column: [
            { field: "commit_id", title: "Commit_ID" },
            { field: "fund_id", title: "Fund_ID" },
            { field: "date", title: "Date" },
            { field: "fund", title: "Fund" },
            { field: "amount", title: "Commited Amounts" },
            {
              field: "commitBefore",
              title: "Undrawn Capital Commitment before Current Drawdown Notice"
            },
            { field: "drawNotice", title: "Total Drawdown Notice" },
            {
              field: "commitAfter",
              title: "Undrawn Capital Commitment after Current Drawdown Notice"
            }
          ],
          data: null
        };

        var [_, fundTitleObj] = buildFundColumnName(fund);

        let tempData = [];
        for (let i = 0; i < commit.length; i++) {
          let tmp = {};
          const raw = commit[i];
          tmp[obj.column[0].field] = raw.id;
          tmp[obj.column[1].field] = raw.fund_id;
          tmp[obj.column[2].field] = dateToYMDwSlash(raw.date);
          tmp[obj.column[3].field] = keyToName(fundTitleObj[raw.fund_id]);
          tmp[obj.column[4].field] = Number(raw.amount);

          let totalAmount = Number(raw.amount);
          for (let i = 0; i < invest.length; i++) {
            if (
              raw.id == invest[i].commit_id &&
              raw.fund_id == invest[i].fund_id
            ) {
              totalAmount -= Number(invest[i].invest_amount);
            }
          }

          tmp[obj.column[5].field] = totalAmount;
          tmp[obj.column[6].field] = null;
          tmp[obj.column[7].field] = null;
          tempData.push(tmp);
        }
        obj.data = tempData;

        dispatch({
          type: GET_COMMITS,
          payload: obj
        });
      })
    );
};

// Calculate
export const calculateCall = investment => (dispatch, getState) => {
  axios
    .get("/api/fund/")
    .catch(err => console.log(err))
    .then(res => {
      let data = getState().callsReducer.commits.data;
      let commitsVar = getState().callsReducer.commits;
      let finalTable = res.data.map(raw => {
        raw["amount"] = null;
        raw["commit_id"] = null;
        return raw;
      });

      for (let i = 0; i < data.length; i++) {
        if (investment === null) {
          data[i].commitAfter = data[i].commitBefore;
        } else if (investment === 0) {
          data[i].drawNotice = data[i].commitBefore;
          investment = null;
        } else if (data[i].commitBefore < investment) {
          data[i].drawNotice = data[i].commitBefore;
          finalTable[data[i].fund_id - 1]["amount"] = data[i].drawNotice;
          finalTable[data[i].fund_id - 1]["commit_id"] = data[i].commit_id;
          investment -= data[i].commitBefore;
        } else if (data[i].commitBefore >= investment) {
          data[i].drawNotice = investment;
          finalTable[data[i].fund_id - 1]["amount"] = data[i].drawNotice;
          finalTable[data[i].fund_id - 1]["commit_id"] = data[i].commit_id;
          data[i].commitAfter = data[i].commitBefore - investment;
          investment = 0;
        }
      }
      commitsVar.data = data;
      commitsVar.finalTable = finalTable;
      console.log(commitsVar);

      dispatch({
        type: GET_RESULT,
        payload: commitsVar
      });
    });
};

export const submitData = () => (dispatch, getState) => {
  const req = getState().callsReducer.callRequest;
  const allData = getState().callsReducer.commits;
  const CALL_ID = getState().callsReducer.funds.call_id + 1;
  let obj = {
    call_id: CALL_ID,
    date: new Date(req.date),
    invest_name: req.name,
    capital_require: Number(req.amount)
  }
  axios
    .post("/api/call/", obj)
    .catch(err => console.log(err))
    .then(res => {
      console.log(res);
    });

  for (let i=0;i<allData.finalTable.length;i++) {
    let raw = allData.finalTable[i]; 
    if (raw.amount === null)  continue;
    let tmp = {
      call_id: CALL_ID,
      commit_id: raw.commit_id,
      fund_id: raw.fund_id, 
      invest_amount: raw.amount
    };
    axios
      .post("/api/fundinvest/", tmp)
      .catch(err => console.log(err))
      .then(res => {
        console.log(res);
      });
  }


  dispatch({
    type: ADD_DATA,
    payload: allData
  });
};



