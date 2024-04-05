import { getMarketData } from "../../services/markets";

function getData(event) {
  event.preventDefault();
  console.log(event.target.stocks.value);
  getMarketData({ stocks: event.target.stocks.value });
}

function MarketData() {
  return (
    <>
      <form onSubmit={getData}>
        <input name="stocks"></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default MarketData;
