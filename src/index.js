import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import ErrorPage from './error-page';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import IndexPage from './pages';
import CustomerPage from './pages/customer';
import Dashboard from './pages/dashboard';

import 'bootstrap/dist/css/bootstrap.min.css';
import './resources/css/index.css';
import './resources/css/dashboard.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage/>,
    errorElement: <ErrorPage />,
  },{
    path: "/customer",
    element: <CustomerPage/>,
    errorElement: <ErrorPage />,
  },{
    path: "/dashboard",
    element: <Dashboard/>,
    errorElement: <ErrorPage />,
  },{
    path: "/menu",
    element: <></>,
    errorElement: <ErrorPage />,
  },{
    path: "/order",
    element: <></>,
    errorElement: <ErrorPage />,
  },{
    path: "/product",
    element: <></>,
    errorElement: <ErrorPage />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
