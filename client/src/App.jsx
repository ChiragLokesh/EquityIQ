import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes, useNavigate } from "react-router-dom";
import LoginPage from "./view/Login/LoginPage";
import LoginSuccessPage from "./view/Login/LoginSuccessPage";
import SignUpPage from "./view/SignUp/SignUp";
import ForgotPasswordPage from "./view/Login/forgotpassword";
import Testing from "./view/Test/Testing";
import Modules from "./view/Test/Module/module";
import Navbar from "./view/Navbar/Navbar";
import Search from "./view/Search/search";
import News from "./view/News/news";
import Home from "./view/Home/Home";
import Intro from "./view/Test/Intro/Intro";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/LoginSuccessPage" element={<LoginSuccessPage />} />
      <Route path="/" element={<Navbar />}>
        <Route path="/learn/01" element={<Intro />} />
        <Route path="/learn/02" element={<Modules />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/search" element={<Search />} />
        <Route path="/news" element={<News />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
