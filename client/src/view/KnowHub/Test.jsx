import React from "react";
import { useNavigate } from "react-router-dom";
import "./Test.css";
import Logo from "./img.jpg";
import { varsityData } from "./data";
function Test() {
  const navigate = useNavigate();

  const handleEvent = async (event) => {
    event.preventDefault();
    try {
      console.log("Event handled");
      navigate("/LoginSuccessPage");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const login = (event) => {
    try {
      console.log("Back to login for now.");
      navigate("/");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const module = (event) => {
    try {
      console.log("Back to login for now.");
      navigate("/");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="test">
      <div className="EquityIQ">
        <h1 onClick={login}>EquityIQ</h1>
      </div>
      <div className="card-grid">
        {varsityData.map((data) => (
          <div className="card bg-gray-600" onClick={module}>
            <div className="container">
              <h4 className="text">
                <b>{data.title}</b>
              </h4>
              <p className="text">
                {data.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Test;
