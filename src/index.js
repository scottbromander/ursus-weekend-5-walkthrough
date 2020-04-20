import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

const feedbackInitialState = {
  feeling: 0,
  understanding: 0,
  supported: 0,
  comments: "",
};

const feedbackReducer = (state = feedbackInitialState, action) => {
  if (action.type === "SET_FEELING") {
    return {
      ...state,
      feeling: action.payload,
    };
  }

  if (action.type === "SET_UNDERSTANDING") {
    return {
      ...state,
      understanding: action.payload,
    };
  }

  if (action.type === "SET_SUPPORTED") {
    return {
      ...state,
      supported: action.payload,
    };
  }

  if (action.type === "SET_COMMENTS") {
    return {
      ...state,
      comments: action.payload,
    };
  }

  if (action.type === "RESET_FEEDBACK") {
    return {
      feeling: 0,
      understanding: 0,
      supported: 0,
      comments: "",
    };
  }

  return state;
};

const storeInstance = createStore(
  combineReducers({ feedbackReducer }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
