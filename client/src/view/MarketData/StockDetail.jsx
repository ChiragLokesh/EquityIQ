// StockDetail.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function StockDetail() {
  const [stock, setStock] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    async function fetchStock() {
      try {
        const response = await axios.get(`/api/stock/${name}`);
        setStock(response.data);
      } catch (error) {
        console.error("Error fetching stock:", error);
      }
    }
    fetchStock();
  }, [name]);

  return (
    <div>
      {stock ? (
        <div>
          <h1>{stock.NAME} Ratios</h1>
          <ul>
            <li>P/E Ratio: {stock["P/E RATIO"]}</li>
            <li>P/B Ratio: {stock["P/B RATIO"]}</li>
            <li>EPS: {stock.EPS}</li>
            <li>Dividend Yield(%): {stock["DIV YEILD(%)"]}</li>
            {/* Add more ratios as needed */}
          </ul>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default StockDetail;
