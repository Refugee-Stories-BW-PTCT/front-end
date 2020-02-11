import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// router
import { BrowserRouter } from "react-router-dom";
import thunk from "redux-thunk";
// redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import { reducer } from "./reducers/index";
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
