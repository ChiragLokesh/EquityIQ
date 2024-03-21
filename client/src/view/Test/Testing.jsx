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
    <div className="bg-white min-h-screen">
      <div className="heading">
        <h1 className="text-black text-6xl font-extrabold pt-10 pl-10">
          Stock Market Education
        </h1>
      </div>
      <div className="pb-10">
        <h1 className="text-black text-4xl font-bold pl-10">
          Play the market to your favor
        </h1>
      </div>
      <br></br>
      <br></br>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-10">
        {varsityData.map((data, index) => (
          <div
            className="card bg-gray-400 rounded-lg cursor-pointer p-6"
            onClick={() => openModule(data.num)}
            key={index}
          >
            <div className="container p-4">
              <h2
                className="text-right font-bold text-5xl"
                style={{ color: data.color }}
              >
                <b>{data.num}</b>
              </h2>

              <h4 className="text-2xl">
                <b>{data.title}</b>
              </h4>

              <br />
              <p className="text-lg">{data.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testing;
