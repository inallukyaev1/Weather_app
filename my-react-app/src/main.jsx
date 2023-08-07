import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./components/methodsJs/reducer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Help } from "./components/Help";
import { Widgets } from "./components/Widgets";
import { Details } from "./components/Details";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, path: "/", element: <Widgets /> },
      {
        path: "/Help",
        element: <Help></Help>,
      },
      { path: "/Details", element: <Details /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
