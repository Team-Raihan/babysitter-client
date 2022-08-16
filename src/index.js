import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";

const root = ReactDOM.createRoot(document.getElementById("root"));
// Create a client
const queryClient = new QueryClient();
root.render(
  <React.StrictMode>

     
      <BrowserRouter>
      <QueryClientProvider client={queryClient}>
    <ChakraProvider>
        <App />
    </ChakraProvider>
      </QueryClientProvider>
      </BrowserRouter>
  </React.StrictMode>
);
