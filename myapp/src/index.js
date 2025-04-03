import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './components/About';
import ErrorElement from './components/ErrorElement'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import ResturantCardList from './components/ResturantCardList';
import Home from './components/Home';
import ResturantMenu from './components/ResturantMenu';




let appRouter = createBrowserRouter([
  {
  path:"/",
  element:<App/>,
  children:[
    {
      path:"/",
      element:<ResturantCardList/>
    },
    {
      path:"/About",
      element:<About/>
    },
    {
      path:"/Home",
      element:<Home/>
    },
    {
      path:"/Resturant/:id",
      element:<ResturantMenu/>
    },
    
  ],
  errorElement:<ErrorElement/>
 },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={appRouter}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
