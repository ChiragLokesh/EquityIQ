import React from "react";

import { useNavigate, useParams } from "react-router-dom";

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

  return (
    <div className="bg-white">
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