import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./components/methodsJs/reducer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Help } from "./components/help/help";
import { Widgets } from "./components/widgets/widgets";
import { Details } from "./components/details/details";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, path: "/", element: <Widgets /> },
      {
        path: "/help",
        element: <Help></Help>,
      },
      { path: "/details", element: <Details /> },
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
