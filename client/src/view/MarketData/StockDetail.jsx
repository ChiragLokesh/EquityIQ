import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";

function StockDetail() {
  const [stock, setStock] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    const encodedName = encodeURIComponent(name);
    const url = `http://localhost:5001/api/v2/stocks/details/${encodedName}`;
    console.log("Fetching data from:", url);

    setLoading(true);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status} - ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data && Object.keys(data).length > 0) {
          setStock(data);
        } else {
          throw new Error("No data found for this stock");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(`Failed to fetch data: ${error.message}`);
        setLoading(false);
      });
  }, [name]);

  if (loading)
    return (
      <div className="text-center mt-5">
        <BeatLoader color="#4A90E2" />
      </div>
    );
  if (error) return <p className="text-red-500 text-center mt-5">{error}</p>;

  return stock ? (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold text-gray-700">{stock.NAME} Ratios</h1>
      <ul className="mt-3">
        <li>P/E Ratio: {stock["P/E RATIO"]}</li>
        <li>P/B Ratio: {stock["P/B RATIO"]}</li>
        <li>EPS: {stock.EPS}</li>
        <li>Dividend Yield(%): {stock["DIV YEILD(%)"]}</li>
      </ul>
      <Link
        to="/"
        className="mt-5 inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300"
      >
        Go Back
      </Link>
    </div>
  ) : (
    <p className="text-center mt-5">No stock data found.</p>
  );
}

export default StockDetail;
