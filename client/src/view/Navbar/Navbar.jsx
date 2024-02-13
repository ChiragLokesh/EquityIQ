import { Outlet } from "react-router-dom";
import Logo from "src/assets/equity-iq-logo.png";

function Navbar() {
  const login = (event) => {
    try {
      console.log("Back to login for now.");
      navigate("/");
    } catch (error) {
      console.log("Error:", error);
    }
  };
  return (
    <>
      <div className="flex p-2
       bg-white h-[10vh] items-center justify-between">
        <div className="navbar-logo">
          <img src={Logo} alt="Your Company" />
        </div>
        <div className="navbar-links">
          <h2 onClick={login}>Home</h2>
          <h2 onClick={login}>Explore</h2>
          <h2 onClick={login}>KnowledgeHub</h2>
          <h2 onClick={login}>News</h2>
          <h2 onClick={login}>Trending</h2>
        </div>
        <div className="navbar-search">
          <input type="text" placeholder="Search..." />
          <button type="submit">
            Search
          </button>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
