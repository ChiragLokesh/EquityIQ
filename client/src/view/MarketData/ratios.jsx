// App.js

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios"; // You may need to install axios using npm or yarn

function App() {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    // Fetch stock data when the component mounts
    async function fetchData() {
      try {
        const response = await axios.get("/api/stocks");
        setStockData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <Router>
      <div>
        <h1>Stock Ratios</h1>
        <ul>
          {stockData.map((stock) => (
            <li key={stock.NAME}>
              <Link to={`/stock/${stock.NAME}`}>{stock.NAME}</Link>
            </li>
          ))}
        </ul>

        <Route
          path="/stock/:name"
          render={({ match }) => <StockDetail name={match.params.name} />}
        />
      </div>
    </Router>
  );
}

function StockDetail({ name }) {
  const [stock, setStock] = useState(null);

  useEffect(() => {
    // Fetch individual stock data when the component mounts
    async function fetchStock() {
      try {
        const response = await axios.get(`/api/stock/${name}`);
        setStock(response.data);
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    }
    fetchStock();
  }, [name]);

  if (!stock) return <p>Loading...</p>;

  return (
    <div>
      <h2>{stock.NAME} Ratios</h2>
      <ul>
        <li>P/E Ratio: {stock["P/E RATIO"]}</li>
        <li>P/B Ratio: {stock["P/B RATIO"]}</li>
        <li>EPS: {stock.EPS}</li>
        <li>Dividend Yield(%): {stock["DIV YEILD(%)"]}</li>
        {/* Add more ratios as needed */}
      </ul>
    </div>
  );
}

export default App;
