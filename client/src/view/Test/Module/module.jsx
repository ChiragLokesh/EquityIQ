import React from "react";
import { varsityData } from "./KnowledgeHubData";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import pic from "src/assets/stocks.jpg";

function Module() {
  const navigate = useNavigate();
  const params = useParams();

  function getObjectById(array, id) {
    for (const obj of array) {
      if (obj.num === id) {
        return obj;
      }
    }
    return null;
  }

  let article = getObjectById(varsityData, params.id);

  // Split the body text into sentences
  const sentences = article.body.split("\n");

  return (
    <div style={{ backgroundColor: "white", minHeight: "100vh" }}>
      <div className="bg-white">
        <div className="heading">
          <h1 className="text-black text-6xl font-extrabold pt-[50px] pl-[50px]">
            {article.num}. {article.title}
          </h1>
        </div>
        <div className="pb-[50px]">
          <h1 className="text-black text-4xl font-bold pl-[50px]">
            {article.subtitle}
          </h1>
          <img src={pic} alt="pic" />
        </div>
        <div className="content">
          {/* Render each sentence as a separate paragraph */}
          {sentences.map((sentence, index) => (
            <p key={index} className="text-justify px-[300px]">
              {sentence}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Module;
