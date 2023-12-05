import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ProductProvider } from './context/ProductProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ProductProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ProductProvider>
)

{/* <React.StrictMode>, */ }