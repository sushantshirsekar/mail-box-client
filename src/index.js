import React from "react";
// import ReactDOM from "react-dom/client";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./index.css";
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import 'draft-js/dist/Draft.css';
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./store/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
