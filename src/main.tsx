import React from "react";
import ReactDOM from "react-dom/client";
import "regenerator-runtime/runtime";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { mainroute } from "./Routes/mainroutes.tsx";
import { TeacherProvider } from "./context/TeacherContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TeacherProvider>
      <RouterProvider router={mainroute}></RouterProvider>
    </TeacherProvider>
  </React.StrictMode>
);
