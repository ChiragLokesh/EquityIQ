import React, { useState, useEffect } from "react";

function CurrentPrice() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    async function fetchStockData() {
      try {
        const response = await fetch("http://127.0.0.1:5000/api/stocks");
        if (!response.ok) {
          throw new Error("Failed to fetch stock data");
        }
        const data = await response.json();
        setStocks(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    }

    fetchStockData();
  }, []);

  return (
    <div>
      <h1>Stock Prices</h1>
      <div id="stockCards" style={{ display: "flex", flexWrap: "wrap" }}>
        {Object.entries(stocks).map(([symbol, price]) => (
          <div
            className="card"
            key={symbol}
            style={{
              margin: "10px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              minWidth: "200px",
            }}
          >
            <h2>{symbol}</h2>
            <p>Price: {price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CurrentPrice;
