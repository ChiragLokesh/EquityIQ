import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes, useNavigate } from 'react-router-dom'
import LoginPage from './view/Login/LoginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/' element={<>uifiudfgieufg</>} />
    </Routes>
  )
}

export default App
