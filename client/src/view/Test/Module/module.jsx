import React from "react";
// import "./Testing.css";
import Logo from "./logo.png";
import { varsityData } from "./KnowledgeHubData";
import { ModuleData } from "./module";
import { useNavigate } from "react-router-dom";

function Module() {
  const navigate = useNavigate();

  // Function to handle the search submission
  const handleSearch = (event) => {
    event.preventDefault();
    // Implement your search logic here, using `navigate` if needed
  };

  const login = (event) => {
    try {
      console.log("Back to login for now.");
      navigate("/");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const openModule = () => {
    // Define the logic for opening a module or handle the click event
    console.log("Open module logic");
  };

  console.log(varsityData);

  return (
    <>
      <div className="flex p-8 bg-white items-center justify-between">
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
          <button type="submit" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      <div className="bg-white">
        <div className="heading">
          <h1 className="text-black text-6xl font-extrabold pt-[50px] pl-[50px]">
            01. Introduction to the Stock Markets
          </h1>
        </div>
        <div className="pb-[50px]">
          <h1 className="text-black text-4xl font-bold pl-[50px]">
            Learn the ins and outs
          </h1>
        </div>
        <div className="content">
          <div className="text-justify px-[150px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga minus aperiam enim accusantium? Cumque, sapiente natus iste saepe quos perspiciatis architecto minus veniam excepturi laudantium quibusdam quis deserunt error eos officia exercitationem pariatur, facere placeat ex vitae dignissimos tempore velit. Ipsa necessitatibus odit facilis rerum harum et dicta consequatur omnis amet sed perferendis praesentium ut, voluptas sapiente magni voluptates tenetur consequuntur quibusdam quaerat soluta aspernatur ipsum dolore exercitationem. In amet doloremque ipsa nostrum facere recusandae velit incidunt animi laboriosam aut atque minima enim perferendis ab reprehenderit nesciunt eos placeat, perspiciatis sequi beatae soluta quasi! Aspernatur est cum aut ullam natus.
          </div>
        </div>
      </div>
    </>
  );
}

export default Module;
