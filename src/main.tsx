import React from 'react'
import ReactDOM from 'react-dom/client'
import './globalStyles.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

const router = createBrowserRouter([
  {
      path: "/",
      element: <Home />
  }, {
    path: "/product/:id",
    element: <ProductDetails />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
