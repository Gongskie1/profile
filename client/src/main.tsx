import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  RouterProvider
 } from 'react-router-dom'
import './index.css'
import router from './browser_router.tsx'
import AuthProvider from "./pages/utils/context-api/AuthProvider.tsx"



ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)
