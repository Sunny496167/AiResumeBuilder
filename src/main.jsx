import React from 'react'
import ReactDOM from 'react-dom'  
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import SignInPage from './auth/sign-in'
import Home from './Pages/Home'
import { Dashboard } from './Pages/Dashboard'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter([
  {
    element:<App />,
    children:[
      { path:'/',
        element:<Home />
      },
      {
        path:'/dashboard',
        element:<Dashboard />
      },
    ]
  },
  { path:'/auth/sign-in',
    element:<SignInPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>,
)
