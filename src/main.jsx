import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import SingUp from "./components/SingUp.jsx";
import SingIn from "./components/SingIn.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import Users from "./components/Users.jsx";
import Main from "./layout/Main.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <App></App>,
        loader: () => fetch(" https://coffee-store-server-6kvlist1g-mariz-al-akibs-projects.vercel.app/coffee"),
      },
      {
        path: "addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(` https://coffee-store-server-6kvlist1g-mariz-al-akibs-projects.vercel.app/coffee/${params.id}`),
      },
      {
        path: "/singup",
        element: <SingUp></SingUp>,
      },
      {
        path: "/singin",
        element: <SingIn></SingIn>,
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () => fetch(" https://coffee-store-server-6kvlist1g-mariz-al-akibs-projects.vercel.app/user"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
