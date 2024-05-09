import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import App from './App.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx'
import Error from './pages/Error.jsx';
import Home from './pages/Home.jsx';
import Resume from './pages/Resume.jsx';
import Portfolio from './pages/Portfolio.jsx';

import './index.css'




const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/About',
        element: <About/>,
      },
      {
        path: '/Contact',
        element: <Contact/>,
      },
      {
        path: '/Error',
        element: <Error/>,
      },
      {
        path: '/Resume',
        element: <Resume/>,
      },
      {
        path: '/Portfolio',
        element: <Portfolio/>,
      },
    ]
  }
])





ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router ={router} />
)
