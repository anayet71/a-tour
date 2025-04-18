import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import router from './routes/router.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Provider/AuthProvider.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider >

      <RouterProvider router={router} ></RouterProvider>
    </AuthProvider>
  </StrictMode>
)
