import React from "react";
import { Router } from "@reach/router";
import { Provider } from "react-redux";
import store from "./data/createStore";
import Main from "./Components/Main";
import Landing from "./Landing";
import Categories from "./Categories";
import Chapters from "./Chapters";

const App = () => (
  <Provider store={store}>
    <Router>
      <Landing path="/" />
      <Categories path="/categories" />
      <Chapters path="/chapters/:cert" />
      <Main path="/main/:id" />
    </Router>
  </Provider>
);

export default App;
