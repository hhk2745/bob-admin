import React from 'react';
import ReactDOM from 'react-dom/client';
import './resources/css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Root from "./routes/root";
import ErrorPage from './error-page';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MemberPage from './pages/member';
import IndexPage from './pages';
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage/>,
    errorElement: <ErrorPage />,
  },{
    path: "/member",
    element: <MemberPage/>,
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
