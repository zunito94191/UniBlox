import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HomePage from "./HomePage";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <HomePage />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
