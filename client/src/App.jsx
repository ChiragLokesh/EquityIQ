import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
// Import additional components
import StockList from "./view/MarketData/StockList";
import StockDetail from "./view/MarketData/StockDetail"; // Assuming you have a StockDetail component
// Existing imports...
import LoginPage from "./view/Login/LoginPage";
import LoginSuccessPage from "./view/Login/LoginSuccessPage";
import SignUpPage from "./view/SignUp/SignUp";
import ForgotPasswordPage from "./view/Login/forgotpassword";
import Testing from "./view/Test/Testing";
import Navbar from "./view/Navbar/Navbar";
import Cur from "./view/MarketData/curprice";
import News from "./view/News/news";
import Home from "./view/Home/Home";
import M1 from "./view/Test/mc/M1";
import M2 from "./view/Test/mc/M2";
import M3 from "./view/Test/mc/M3";
import M4 from "./view/Test/mc/M4";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/stock" element={<StockList />} />
      <Route path="/stock/:name" element={<StockDetail />} />
      for individual stock detail
      <Route path="/login-success" element={<LoginSuccessPage />} />
      <Route path="/" element={<Navbar />}>
        <Route path="learn/01" element={<M1 />} />
        <Route path="learn/02" element={<M2 />} />
        <Route path="learn/03" element={<M3 />} />
        <Route path="learn/04" element={<M4 />} />
        <Route path="testing" element={<Testing />} />
        <Route path="news" element={<News />} />
        <Route path="home" element={<Home />} />
        <Route path="explore" element={<Cur />} />
      </Route>
    </Routes>
  );
}

export default App;
