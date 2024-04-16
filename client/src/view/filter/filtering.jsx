import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css"; // Import the default styles for rc-slider

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

  const handleChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const query = new URLSearchParams(filters).toString();
    const response = await fetch(`http://localhost:5002/api/stocks?${query}`);
    const data = await response.json();
    setStocks(data);
  };
  const inputContainerStyle = {
    margin: "10px",
    display: "inline-block",
    verticalAlign: "top",
  };
  const formStyle = {
    backgroundColor: "#333",
    color: "white",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
  };

  const inputStyle = {
    margin: "10px",
    padding: "10px",
    color: "black",
    width: "40%",
    alignItems: "center",
    display: "inline-block",
    verticalAlign: "middle",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "green",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  // Define cell style object
  const cellStyle = {
    padding: "8px",
    textAlign: "center",
  };

  return (
    <div style={{ padding: "20px", alignItems: "center" }}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={{ width: "100%", overflowX: "auto" }}>
          {/* P/E Ratio */}
          <h2 style={{ color: "darkcyan", fontSize: "30px" }}>
            Customize According To Your Needs
          </h2>
          <br />
          <div>
            <label style={{ fontSize: "20px" }} htmlFor="peMin">
              P/E Ratio Min
            </label>
            <Slider
              min={0}
              max={100}
              value={filters.peMin}
              onChange={(value) => handleChange("peMin", value)}
              style={inputStyle}
            />
            <div>{filters.peMin}</div>
          </div>{" "}
          <br />
          <div>
            <label style={{ fontSize: "20px" }} htmlFor="peMax">
              P/E Ratio Max
            </label>
            <Slider
              min={0}
              max={100}
              value={filters.peMax}
              onChange={(value) => handleChange("peMax", value)}
              style={inputStyle}
            />
            <div>{filters.peMax}</div>
          </div>
          <br />
          {/* EPS */}
          <div>
            <label style={{ fontSize: "20px" }} htmlFor="epsMin">
              EPS Min
            </label>
            <Slider
              min={0}
              max={100}
              value={filters.epsMin}
              onChange={(value) => handleChange("epsMin", value)}
              style={inputStyle}
            />
            <div>{filters.epsMin}</div>
          </div>
          <br />
          <div>
            <label style={{ fontSize: "20px" }} htmlFor="epsMax">
              EPS Max
            </label>
            <Slider
              min={0}
              max={100}
              value={filters.epsMax}
              onChange={(value) => handleChange("epsMax", value)}
              style={inputStyle}
            />
            <div>{filters.epsMax}</div>
          </div>
          <br />
          {/* Dividend Yield */}
          <div>
            <label style={{ fontSize: "20px" }} htmlFor="divYieldMin">
              Dividend Yield Min
            </label>
            <Slider
              min={0}
              max={6}
              value={filters.divYieldMin}
              onChange={(value) => handleChange("divYieldMin", value)}
              style={inputStyle}
            />
            <div>{filters.divYieldMin}</div>
          </div>
          <br />
          <div>
            <label style={{ fontSize: "20px" }} htmlFor="divYieldMax">
              Dividend Yield Max
            </label>
            <Slider
              min={0}
              max={6}
              value={filters.divYieldMax}
              onChange={(value) => handleChange("divYieldMax", value)}
              style={inputStyle}
            />
            <div>{filters.divYieldMax}</div>
          </div>
          <br />
          {/* P/B Ratio */}
          <div>
            <label style={{ fontSize: "20px" }} htmlFor="pbRatioMin">
              P/B Ratio Min
            </label>
            <Slider
              min={0}
              max={10}
              value={filters.pbRatioMin}
              onChange={(value) => handleChange("pbRatioMin", value)}
              style={inputStyle}
            />
            <div>{filters.pbRatioMin}</div>
          </div>
          <br />
          <div>
            <label style={{ fontSize: "20px" }} htmlFor="pbRatioMax">
              P/B Ratio Max
            </label>
            <Slider
              min={0}
              max={10}
              value={filters.pbRatioMax}
              onChange={(value) => handleChange("pbRatioMax", value)}
              style={inputStyle}
            />
            <div>{filters.pbRatioMax}</div>
          </div>
          <br />
        </div>
        <button style={buttonStyle} type="submit">
          FIND OUT
        </button>
      </form>
      {/* Displaying search results */}
      {stocks.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h2
            style={{ color: "darkcyan", fontSize: "30px", textAlign: "center" }}
          >
            YOUR RESEARCHED STOCKS:
          </h2>
          <br />
          <br />
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th
                  style={{
                    cellStyle,
                    backgroundColor: "green",
                    fontSize: "20px",
                  }}
                >
                  Name
                </th>
                <th
                  style={{
                    cellStyle,
                    backgroundColor: "green",
                    fontSize: "20px",
                  }}
                >
                  P/E Ratio
                </th>
                <th
                  style={{
                    cellStyle,
                    backgroundColor: "green",
                    fontSize: "20px",
                  }}
                >
                  EPS
                </th>
                <th
                  style={{
                    cellStyle,
                    backgroundColor: "green",
                    fontSize: "20px",
                  }}
                >
                  Dividend Yield
                </th>
                <th
                  style={{
                    cellStyle,
                    backgroundColor: "green",
                    fontSize: "20px",
                  }}
                >
                  P/B Ratio
                </th>
              </tr>
            </thead>
            <tbody>
              {stocks.map((stock, index) => (
                <tr key={index}>
                  <td style={{ ...cellStyle, backgroundColor: "#666" }}>
                    {stock["NAME"]}
                  </td>
                  <td style={{ ...cellStyle, backgroundColor: "#777" }}>
                    {stock["P/E RATIO"]}
                  </td>
                  <td style={{ ...cellStyle, backgroundColor: "#888" }}>
                    {stock["EPS"]}
                  </td>
                  <td style={{ ...cellStyle, backgroundColor: "#999" }}>
                    {stock["DIV YEILD(%)"]}
                  </td>
                  <td style={{ ...cellStyle, backgroundColor: "#aaa" }}>
                    {stock["P/B RATIO"]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default StockFilter;
