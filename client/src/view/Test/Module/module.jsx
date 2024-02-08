import React from "react";
// import "./Testing.css";
import { varsityData } from "./KnowledgeHubData";
import { ModuleData } from "./moduleData";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";

function Module() {
  const navigate = useNavigate();
  const params = useParams();

  console.log(params.id);

  function getObjectById(array, id) {
    for (const obj of array) {
      if (obj.num === id) {
        return obj;
      }
    }
    return null;
  }

  let article = getObjectById(varsityData, params.id);
  console.log(article);

  return (
    <>
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
        </div>
        <div className="content">
          <div className="text-justify px-[150px]">{article.body}</div>
        </div>
      </div>
    </>
  );
}

export default Module;
