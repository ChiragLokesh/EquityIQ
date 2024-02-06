import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes, useNavigate } from 'react-router-dom'
import LoginPage from './view/Login/LoginPage'
import LoginSuccessPage from './view/Login/LoginSuccessPage';
import SignUpPage from './view/SignUp/SignUp'
import MarketData from './view/MarketData/MarketData'
import ForgotPasswordPage from './view/Login/forgotpassword'
import KnowHub from './view/KnowHub/KnowHub'
import Test from './view/KnowHub/test'
import StockMarket from './view/KnowHub/module1/StockMarket'
import Testing from './view/Test/Testing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      {/*
       <Route path='/login' element={<LoginPage />} />
      */}
      <Route path='/stockmarket' element={<StockMarket/>} />
      <Route path='/knowledge' element={<KnowHub/>} />
      <Route path='/forgot-password' element={<ForgotPasswordPage/>} />
      <Route path='/sign-up' element={<SignUpPage />} />
      <Route path="/LoginSuccessPage" element={<LoginSuccessPage />} />
      <Route path='/market-data' element={<MarketData />} />
      <Route path='/test' element={<Test/>} />
      <Route path='/testing' element={<Testing/>} />
      <Route path='/' element={<LoginPage/>} />
    </Routes>
  )
}

export default App
