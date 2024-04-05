import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

function StockChart({ symbol }) {
  // Assume fetching `/api/stock-history?symbol=${symbol}` provides dates and prices arrays
  // You'll need to implement the fetching logic according to your API

  const [chartData, setChartData] = useState({
    labels: [], // Dates
    datasets: [
      {
        label: "Stock Price",
        data: [], // Prices
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
    ],
  });

  // Fetching logic for historical stock data goes here

  return <Line data={chartData} />;
}

export default StockChart;
