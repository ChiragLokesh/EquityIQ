import React from "react";
import "./Testing.css";
import Logo from "./logo.png";
import { varsityData } from "./KnowledgeHubData";
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

  const openModule = (id) => {
    // Define the logic for opening a module or handle the click event
    console.log("Open module logic");
    navigate('/learn/' + id)
  };

  console.log(varsityData);

  return (
    <>
      <div className="bg-white pb-28">
        <div className="heading">
          {/* color: #ffffff;
          font-weight: bolder;
          font-size: 60px;
          padding-top: 50px;
          padding-left: 50px; */}
          <h1 className="text-black text-6xl font-extrabold pt-[50px] pl-[50px]">
            Stock Market Education
          </h1>
        </div>
        {/* Subheading */}
        <div className="pb-[50px]">
          <h1 className="text-black text-4xl font-bold pl-[50px]">
            Play the market to your favor
          </h1>
          {/* subtitle */}
        </div>
        <div className="cards">
          <div className="card-grid">
            {varsityData.map((data, index) => (
              <div
                className="card bg-gray-500 w-10/12"
                onClick={() => openModule(data.num)}
                key={index}
              >
                <div className="container">
                  <h2 className='text-right font-bold text-4xl' style={{color:data.color}}>
                    <b>{data.num}</b>
                  </h2>
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
