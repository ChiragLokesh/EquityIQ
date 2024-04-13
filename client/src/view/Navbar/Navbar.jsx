import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Logo from "src/assets/equity-iq-logo.png";

function Navbar() {
  const navigate = useNavigate(); // Hook for navigation

  // Updated login function to handle navigation dynamically
  const handleNavigation = (path) => {
    navigate(path);
  };

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
      <div className="flex p-2 bg-white h-[10vh] items-center justify-between">
        <div className="navbar-logo">
          <img src={Logo} alt="Your Company" />
        </div>
        {/* Remove the 'flex justify-center' in div and the 'mx-4' in the h2 tags */}
        <div className="navbar-links flex justify-center">
          <h2 className="mx-4" onClick={() => handleNavigation("/Home")}>
            Home
          </h2>
          <h2 className="mx-4" onClick={() => handleNavigation("/explore")}>
            Explore
          </h2>
          <h2 className="mx-4" onClick={() => handleNavigation("/testing")}>
            KnowledgeHub
          </h2>
          <h2 className="mx-4" onClick={() => handleNavigation("/news")}>
            News
          </h2>
          <h2 className="mx-4" onClick={() => handleNavigation("/filter")}>
            Filter
          </h2>
        </div>
        <div className="navbar-search">
          <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
        </div>
      </div>
      {/* Add the blue strip at the bottom */}
      <div className="left-0 w-full h-2 bg-blue-500"></div>
      <Outlet />
    </>
  );
}

export default Navbar;
