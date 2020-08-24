import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

import "./index.css";
import App from "./components/App";
import reducer from "./reducers/index";
const store = createStore(reducer);
console.log("array", store.getState());
ReactDOM.render(<App store={store} />, document.getElementById("root"));
