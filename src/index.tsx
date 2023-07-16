// import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap";
import {  Route, BrowserRouter } from "react-router-dom"
// console.log("ImportVar",importVar);


import addTwoNumbers from "./addTwoNumbers";
addTwoNumbers(2,3);

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));

