import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Accueil from './components/Accueil';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import ErrorPage from './error-page';
import Root from './Root';


const router = createBrowserRouter([
  {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/accueil",
          element: <Accueil />
        },
        {
          path: "/experience",
          element: <Experience />
        },
        {
          path: "/portfolio",
          element: <Portfolio />
        },
        {
          path: "/contact",
          element: <Contact />
        }
      ]
  },

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
