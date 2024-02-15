import React from "react";
// import "./Testing.css";
// import { varsityData } from "./KnowledgeHubData";
// import { ModuleData } from "./moduleData";
import { useNavigate, useParams } from "react-router-dom";
// import Navbar from "../../Navbar/Navbar";

function Search() {
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

//   let article = getObjectById(varsityData, params.id);
//   console.log(article);

  return (
    <div className="bg-white">
      
    </div>
  );
}

export default Search;