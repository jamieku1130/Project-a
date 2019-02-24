import React from "react";
import { Provider } from "react-redux";
import store from "./data/createStore";
import Main from "./Components/Main";
import Landing from "./Landing";
import Categories from "./Categories";
import Chapters from "./Chapters";

const App = () => (
  <Provider store={store}>
    <Landing />
    <Categories />
    <Chapters />
    <Main />
  </Provider>
);

export default App;
