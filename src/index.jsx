import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App className="w-full h-full" />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.register();
