import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes, useNavigate } from "react-router-dom";
import LoginPage from "./view/Login/LoginPage";
import LoginSuccessPage from "./view/Login/LoginSuccessPage";
import SignUpPage from "./view/SignUp/SignUp";
import ForgotPasswordPage from "./view/Login/forgotpassword";
import Testing from "./view/Test/Testing";
import Navbar from "./view/Navbar/Navbar";
import News from "./view/News/news";
import Home from "./view/Home/Home";
import M1 from "./view/Test/mc/M1";
import M2 from "./view/Test/mc/M2";
import M3 from "./view/Test/mc/M3";
import M4 from "./view/Test/mc/M4";
// import Cur from "./view/MarketData/curprice";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      {/* <Route path="/cur" element={<Cur />} /> */}
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/LoginSuccessPage" element={<LoginSuccessPage />} />
      <Route path="/" element={<Navbar />}>
      <Route path="/learn/01" element={<M1 />} />
      <Route path="/learn/02" element={<M2 />} />
      <Route path="/learn/03" element={<M3 />} />
      <Route path="/learn/04" element={<M4 />} />
      <Route path="/testing" element={<Testing />} />
      <Route path="/news" element={<News />} />
      <Route path="/home" element={<Home />} />      
      </Route>
    </Routes>
  );
}

export default App;
