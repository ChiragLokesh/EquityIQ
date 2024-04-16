import React, { useState, useEffect } from "react";

function StockPopup({ stockDetail, onClose }) {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: "9999",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "60%",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2>{stockDetail.NAME}</h2>
        <ul>
          <li>
            <strong>P/B Ratio:</strong> {stockDetail["P/B RATIO"]}
          </li>
          <li>
            <strong>P/E Ratio:</strong> {stockDetail["P/E RATIO"]}
          </li>
          <li>
            <strong>EPS:</strong> {stockDetail["EPS"]}
          </li>
          <li>
            <strong>DIV YEILD:</strong> {stockDetail["DIV YEILD(%)"]}
          </li>
        </ul>
        <button
          onClick={onClose}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

function CurrentPrice() {
  const [stocks, setStocks] = useState({});
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedStock, setSelectedStock] = useState(null);

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

  const symbolToName = {
    ASHOKLEY: "Ashok Leyland Ltd.",
    SBIN: "State Bank of India (SBI)",
    TCS: "Tata Consultancy Services Ltd. (TCS)",
    INFY: "Infosys Ltd.",
    RELIANCE: "Reliance Industries Ltd. (RIL)",
    HDFCBANK: "HDFC Bank Ltd.",
    ICICIBANK: "ICICI Bank Ltd.",
    HINDUNILVR: "Hindustan Unilever Ltd. (HUL)",
    KOTAKBANK: "Kotak Mahindra Bank Ltd.",
    TATASTEEL: "Tata Steel Ltd.",
    ITC: "ITC Ltd.",
    LICI: "Life Insurance Corporation of India (LIC)",
    ADANIPORTS: "Adani Ports and Special Economic Zone Ltd.",
    ASIANPAINT: "Asian Paints Ltd.",
    AXISBANK: "Axis Bank Ltd.",
    "BAJAJ-AUTO": "Bajaj Auto Ltd.",
    BAJFINANCE: "Bajaj Finance Ltd.",
    BAJAJFINSV: "Bajaj Finserv Ltd.",
    BPCL: "Bharat Petroleum Corporation Ltd. (BPCL)",
    BHARTIARTL: "Bharti Airtel Ltd.",
    BRITANNIA: "Britannia Industries Ltd.",
    CIPLA: "Cipla Ltd.",
    COALINDIA: "Coal India Ltd.",
    DIVISLAB: "Divi's Laboratories Ltd.",
    DRREDDY: "Dr. Reddy's Laboratories Ltd.",
    EICHERMOT: "Eicher Motors Ltd.",
    GRASIM: "Grasim Industries Ltd.",
    HCLTECH: "HCL Technologies Ltd.",
    HDFC: "Housing Development Finance Corporation Ltd. (HDFC)",
    HEROMOTOCO: "Hero MotoCorp Ltd.",
    HINDALCO: "Hindalco Industries Ltd.",
    JSWSTEEL: "JSW Steel Ltd.",
    INDUSINDBK: "IndusInd Bank Ltd.",
    IOC: "Indian Oil Corporation Ltd. (IOCL)",
    LT: "Larsen & Toubro Ltd. (L&T)",
    MM: "Mahindra & Mahindra Ltd.",
    MARUTI: "Maruti Suzuki India Ltd.",
    NESTLEIND: "Nestle India Ltd.",
    NTPC: "NTPC Ltd.",
    ONGC: "Oil & Natural Gas Corporation Ltd. (ONGC)",
    POWERGRID: "Power Grid Corporation of India Ltd.",
    SHREECEM: "Shree Cement Ltd.",
    SUNPHARMA: "Sun Pharmaceutical Industries Ltd.",
    TATAMOTORS: "Tata Motors Ltd.",
    TECHM: "Tech Mahindra Ltd.",
    TITAN: "Titan Company Ltd.",
    ULTRACEMCO: "UltraTech Cement Ltd.",
    UPL: "UPL Ltd.",
    WIPRO: "Wipro Ltd.",
  };

  useEffect(() => {
    async function fetchStockData() {
      try {
        const response = await fetch("http://127.0.0.1:5000/api/stocks");
        if (!response.ok) {
          throw new Error("Failed to fetch stock data");
        }
        const data = await response.json();
        setStocks(data);
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

  const handleCardClick = async (symbol) => {
    try {
      const companyName = symbolToName[symbol];
      if (!companyName) {
        throw new Error(`Company name not found for symbol: ${symbol}`);
      }

      const response = await fetch(
        `http://localhost:5001/api/v2/stocks/details/${encodeURIComponent(
          companyName
        )}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch stock details");
      }
      const data = await response.json();
      setSelectedStock(data);
    } catch (error) {
      console.error("Error fetching stock detail:", error);
    }
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

  const closePopup = () => {
    setSelectedStock(null);
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
      {selectedStock && (
        <StockPopup stockDetail={selectedStock} onClose={closePopup} />
      )}
    </div>
  );
}

export default CurrentPrice;
