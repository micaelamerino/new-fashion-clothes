import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Datos from "./context/Context.jsx";
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Datos>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Datos>
  </React.StrictMode>
);
