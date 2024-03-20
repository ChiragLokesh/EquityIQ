// Testing.js

import React from "react";
import "./Testing.css";
import { varsityData } from "./KnowledgeHubData";
import { useNavigate } from "react-router-dom";

function Testing() {
  const navigate = useNavigate();

  const openModule = (id) => {
    navigate(`/learn/${id}`);
  };

  return (
    <>
      <div className="bg-white pb-28">
        <div className="heading">
          <h1 className="text-black text-6xl font-extrabold pt-[50px] pl-[50px]">
            Stock Market Education
          </h1>
        </div>
        <div className="pb-[50px]">
          <h1 className="text-black text-4xl font-bold pl-[50px]">
            Play the market to your favor
          </h1>
        </div>
        <div className="cards">
          <div className="card-grid">
            {varsityData.map((data, index) => (
              <div
                className="card bg-gray-400 w-10/12"
                onClick={() => openModule(data.num)}
                key={index}
              >
                <div className="container">
                  <h2
                    className="text-right font-bold text-4xl"
                    style={{ color: data.color }}
                  >
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
