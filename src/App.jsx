import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ClientMain from "./Pages/Client/Main";
import ClientHome from "./Pages/Client/Home";
import ProductPage from "./Pages/Client/ProductPage";
import ClientAuth from "./Pages/Client/ClientAuth";
import AdminMain from "./Pages/Admin/AdminMain";
import AdminDashboard from "./Pages/Admin/AdminDashboard";

export default function App() {

  const routes = createBrowserRouter([
    {
      path: "/",
      element : <ClientMain />,
      children : [
        {
          path : "",
          element : <ClientHome />
        },
        {
          path : "page",
          element : <ProductPage />
        }
      ]
    },
    {
      path : "/auth",
      element : <ClientAuth />
    },
    {
      path : "/admin",
      element : <AdminMain />,
      children : [
        {
          path : '',
          element : <AdminDashboard />
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
} 