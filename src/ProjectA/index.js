import React from "react";
import { Router } from "@reach/router";
import { Provider } from "react-redux";
import store from "./data/createStore";
import Main from "./Components/Main";
import Landing from "./Landing";
import Categories from "./Categories";
import Chapters from "./Chapters";
import Exam from "./Components/Exam";
import Result from "./Result";

const App = () => (
  <Provider store={store}>
    <Router>
      <Landing path="/" />
      <Categories path="/categories/:process" />
      <Chapters path="/chapters/:cert" />
      <Main path="/main/:id" />
      <Exam path="/exam/:id" />
      <Result path="/result" />
    </Router>
  </Provider>
);

export default App;
