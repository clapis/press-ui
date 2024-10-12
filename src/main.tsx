import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root.tsx'
import Home from './Home.tsx'
import Alerts from './Alerts.tsx'
import ErrorPage from './Error.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {        
        path: "/",
        element: <Home />
      },
      {
        path: "/alerts",
        element: <Alerts />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
