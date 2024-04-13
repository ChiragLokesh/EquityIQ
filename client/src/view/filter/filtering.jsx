import React, { useState } from "react";

function StockFilter() {
  const [stocks, setStocks] = useState([]);
  const [filters, setFilters] = useState({
    peMin: "",
    peMax: "",
    epsMin: "",
    epsMax: "",
    divYieldMin: "",
    divYieldMax: "",
    pbRatioMin: "",
    pbRatioMax: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const fetchStocks = async () => {
    try {
      const response = await fetch(
        `/api/stocks?${new URLSearchParams(filters).toString()}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch stocks");
      }
      const data = await response.json();
      setStocks(data);
    } catch (error) {
      console.error("Error fetching stocks:", error);
      setStocks([]); // Clear stocks array on error
    }
  };

  return (
    <div>
      <h1>Stock Filter</h1>
      <div>
        <label>P/E Ratio:</label>
        <input
          type="number"
          name="peMin"
          value={filters.peMin}
          onChange={handleInputChange}
          placeholder="Min"
        />
        <input
          type="number"
          name="peMax"
          value={filters.peMax}
          onChange={handleInputChange}
          placeholder="Max"
        />
      </div>
      <div>
        <label>EPS:</label>
        <input
          type="number"
          name="epsMin"
          value={filters.epsMin}
          onChange={handleInputChange}
          placeholder="Min"
        />
        <input
          type="number"
          name="epsMax"
          value={filters.epsMax}
          onChange={handleInputChange}
          placeholder="Max"
        />
      </div>
      <div>
        <label>Dividend Yield (%):</label>
        <input
          type="number"
          name="divYieldMin"
          value={filters.divYieldMin}
          onChange={handleInputChange}
          placeholder="Min"
        />
        <input
          type="number"
          name="divYieldMax"
          value={filters.divYieldMax}
          onChange={handleInputChange}
          placeholder="Max"
        />
      </div>
      <div>
        <label>P/B Ratio:</label>
        <input
          type="number"
          name="pbRatioMin"
          value={filters.pbRatioMin}
          onChange={handleInputChange}
          placeholder="Min"
        />
        <input
          type="number"
          name="pbRatioMax"
          value={filters.pbRatioMax}
          onChange={handleInputChange}
          placeholder="Max"
        />
      </div>
      <button onClick={fetchStocks}>Filter Stocks</button>
      <ul>
        {stocks.map((stock, index) => (
          <li key={index}>
            {stock.NAME} - P/E: {stock["P/E RATIO"]}, EPS: {stock.EPS}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StockFilter;
