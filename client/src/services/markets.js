import { API_URL } from ".";

export async function getMarketData(stocks) {
  console.log(stocks);
  await fetch(API_URL + "/market-data", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(stocks),
  });
}

