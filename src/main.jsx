import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AuthProvider from './Auth/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'
import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer theme="colored" />
    <Toaster position="top-right" theme="colored"  reverseOrder={false} />
  </StrictMode>
)
