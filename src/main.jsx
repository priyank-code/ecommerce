import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MyContextProvider from './Context/Context.jsx'
import App from './App.jsx'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import SignUp from './Components/SignUp.jsx'
import Fashion from './Components/Fashion.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <MyContextProvider>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/fashion' element={<Fashion/>} />
      </Routes>
    </MyContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
