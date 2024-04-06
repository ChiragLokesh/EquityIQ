// StockList.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function StockList() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    async function fetchStocks() {
      try {
        const response = await axios.get("/api/stocks");
        if (Array.isArray(response.data)) {
          setStocks(response.data);
        } else {
          console.error("Data received is not an array:", response.data);
        }
      } catch (error) {
        console.error("Error fetching stocks:", error);
      }
    }
    fetchStocks();
  }, []);

  return (
    <div>
      <div>
        <h1>Stocks</h1>
        <ul>
          {stocks.map((stock, index) => (
            <li key={index}>
              <Link to={`/stock/${stock.NAME}`}>{stock.NAME}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StockList;
