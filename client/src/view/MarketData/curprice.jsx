import React, { useState, useEffect } from "react";

function CurrentPrice() {
  const [stocks, setStocks] = useState({});
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Hardcoded for demonstration, but you might want to fetch these from your API
  const stockSymbols = [
    "ASHOKLEY",
    "SBIN",
    "TCS",
    "INFY",
    "RELIANCE",
    "HDFCBANK",
    "ICICIBANK",
    "HINDUNILVR",
    "KOTAKBANK",
    "TATASTEEL",
    "ITC",
    "LICI",
    "ADANIPORTS",
    "ASIANPAINT",
    "AXISBANK",
    "BAJAJ-AUTO",
    "BAJFINANCE",
    "BAJAJFINSV",
    "BPCL",
    "BHARTIARTL",
    "BRITANNIA",
    "CIPLA",
    "COALINDIA",
    "DIVISLAB",
    "DRREDDY",
    "EICHERMOT",
    "GRASIM",
    "HCLTECH",
    "HDFC",
    "HEROMOTOCO",
    "HINDALCO",
    "JSWSTEEL",
    "INDUSINDBK",
    "INFY",
    "IOC",
    "ITC",
    "KOTAKBANK",
    "LT",
    "M&M",
    "MARUTI",
    "NESTLEIND",
    "NTPC",
    "ONGC",
    "POWERGRID",
    "RELIANCE",
    "SHREECEM",
    "SBIN",
    "SUNPHARMA",
    "TCS",
    "TATAMOTORS",
    "TATASTEEL",
    "TECHM",
    "TITAN",
    "ULTRACEMCO",
    "UPL",
    "WIPRO",
  ];

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

  const fetchSpecificStockData = async (symbol) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/api/stock?symbol=${symbol}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch stock data");
      }
      const data = await response.json();
      setStocks({ [symbol]: data[symbol] }); // Adjust to handle the JSON structure
    } catch (error) {
      console.error("Error fetching stock data:", error);
    }
  };

  const handleCardClick = (symbol) => {
    alert(`You clicked on ${symbol} stock!`);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = stockSymbols.filter((v) => regex.test(v));
    }
    setSuggestions(suggestions);
  };

  const suggestionSelected = (value) => {
    setSearch(value);
    setSuggestions([]);
    fetchSpecificStockData(value);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1 style={{ color: "white", marginBottom: "20px", fontSize: "40px" }}>
        Stock Prices
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ margin: "20px", display: "flex", alignItems: "center" }}>
          <input
            type="text"
            value={search}
            onChange={handleSearchChange}
            placeholder="Enter stock symbol"
            style={{
              marginRight: "10px",
              padding: "10px",
              width: "300px", // Adjusted width
              border: "2px solid #ccc",
              borderRadius: "5px",
              fontSize: "1rem",
            }}
          />
          <button
            onClick={() => fetchSpecificStockData(search)}
            style={{
              padding: "10px",
              color: "white",
              backgroundColor: "#4CAF50",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Search
          </button>
        </div>
        {suggestions.length > 0 && (
          <ul
            style={{
              listStyleType: "none",
              padding: 0,
              margin: 0,
              textAlign: "left",
            }}
          >
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => suggestionSelected(suggestion)}
                style={{
                  cursor: "pointer",
                  padding: "10px",
                  width: "300px", // Same width as search bar
                  border: "2px solid #ccc",
                  borderRadius: "5px",
                  marginTop: "5px",
                  backgroundColor: "#fff",
                }}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
        <div style={{ paddingBottom: "20px" }}></div>
      </div>
      <div
        id="stockCards"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {Object.entries(stocks).map(([symbol, price]) => (
          <button
            key={symbol}
            onClick={() => handleCardClick(symbol)}
            style={{
              border: "none",
              background: "none",
              padding: 0,
              margin: "10px",
              cursor: "pointer",
              flex: "1 0 calc(25% - 20px)",
              maxWidth: "calc(25% - 20px)",
            }}
          >
            <div
              style={{
                width: "100%",
                padding: "20px",
                border: "2px solid #3949ab",
                borderRadius: "10px",
                minWidth: "200px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#f3f5f9",
                textAlign: "left",
              }}
            >
              <h2
                style={{
                  color: "#1a237e",
                  marginBottom: "10px",
                  fontSize: "30px",
                }}
              >
                {symbol}
              </h2>
              <p style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
                Price: {price}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default CurrentPrice;
