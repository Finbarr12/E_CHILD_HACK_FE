import React from "react";
import ReactDOM from "react-dom/client";
import "regenerator-runtime/runtime";

import "./index.css";

import { RouterProvider } from "react-router-dom";
import { mainroute } from "./Routes/mainroutes.tsx";
import { TeacherProvider } from "./context/TeacherContext.tsx";
import { Provider } from "react-redux";
import { store } from "./components/Global/Store.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <TeacherProvider>
          <RouterProvider router={mainroute} />
        </TeacherProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
