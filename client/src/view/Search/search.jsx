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
    <div className="bg-white
    ">
      <div className="flex justify-center h-[90vh]">
        <div className="flex items-center justify-center border-2 border-gray-300 h-fit rounded-full">
          <input type="text" className="px-4 py-2 w-80 rounded-l-full" placeholder="Search..."/>
          <button className="px-4 border-l border-gray-300 rounded-r-full">
          {/* Icon or text goes here */}
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;