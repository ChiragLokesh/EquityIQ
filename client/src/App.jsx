import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes, useNavigate } from 'react-router-dom'
import LoginPage from './view/Login/LoginPage'
import LoginSuccessPage from './view/Login/LoginSuccessPage';
import SignUpPage from './view/SignUp/SignUp'
import MarketData from './view/MarketData/MarketData'
import ForgotPasswordPage from './view/Login/forgotpassword'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/forgot-password' element={<ForgotPasswordPage/>} />
      <Route path='/sign-up' element={<SignUpPage />} />
      <Route path="/LoginSuccessPage" element={<LoginSuccessPage />} />
      <Route path='/market-data' element={<MarketData />} />
      <Route path='/' element={<>uifiudfgieufg</>} />
    </Routes>
  )
}

export default App
