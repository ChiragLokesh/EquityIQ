import React from "react";
import "./Testing.css";
import Logo from './logo.png';
import { varsityData } from "./data";
import { useNavigate } from "react-router-dom";

function Testing() {
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

  return (
    <>
      <div className="navbar">
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
      <div className="body">
        <div className="heading">
          <h1 className="title">Stock Market Education</h1>
        </div>
        <div className="subheading">
          <h1 className="subtitle">Play the market to your favor</h1>
        </div>
        <div className="cards">
          <div className="card-grid">
            {varsityData.map((data, index) => (
              <div className="card bg-gray-600" onClick={openModule} key={index}>
                <div className="container">
                  <h4 className="text">
                    <b>{data.title}</b>
                  </h4>
                  <p className="text">{data.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Testing;
