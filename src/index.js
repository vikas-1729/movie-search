import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import "./index.css";
import App from "./components/App";
import rootReducer from "./reducers/index";
// cuurying fuction logger({dispatch,getState},next,action)
// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       console.log("action type", action.type);
//       next(action);
//     };
//   };
// };
const logger = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action !== "function") {
    console.log(action.type);
  }
  next(action);
};
// const thunk = ({ dispatch, getState }) => (next) => (action) => {
//   console.log("value", typeof action);
//   if (typeof action === "function") {
//     console.log("okk");
//     console.log("action", action);
//     action(dispatch);
//     return;
//   }
//   next(action);
// };
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
console.log("array", store.getState());
ReactDOM.render(<App store={store} />, document.getElementById("root"));
