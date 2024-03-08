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
    // Need to add more padding to the top of the search bar
    <div className="bg-white">
      {/* Added padding-top to the container */}
      <div className="flex justify-center h-[90vh] pt-10 lg:pt-20">
        <div className="flex items-center justify-center border-2 border-gray-300 h-fit rounded-full">
          <input type="text" className="px-4 py-2 w-full rounded-l-full" placeholder="Search..."/>
          <button className="px-6 border-l border-gray-300 rounded-r-full">
            <img src ="C:\Users\adith\OneDrive\Documents\GitHub\EquityIQ\client\src\view\Search\icon\search.png" alt="icon" className="w-6 h-6"/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;