import Stocks from "src/assets/stocks.jpg";
import pic from "src/assets/ch4-1.jpg";
import pic1 from "src/assets/ch4-2.jpg";


const Home = () => {
  return (
    <div className="bg-slate-50">
      <div className="pt-10 pl-10">
        <h1 className="text-black font-extrabold text-5xl mb-4">
          Futures Trading
        </h1>
        <h2 className="text-black font-bold text-3xl">Learn about forward markets, futures contracts and more</h2>
      </div>
      <div className="pt-20 pb-10">
        <br></br>
        <p className="text-justify px-[300px] text-lg">
        In finance, a futures contract is a standardized legal contract to buy or sell something at a predetermined price for delivery at a specified time in the future, between parties not yet known to each other. The asset transacted is usually a commodity or financial instrument.
        <br></br><br></br>
        </p>
        <img
          src={pic}
          alt="pic"
          style={{ width: "60%", height: "500px", margin: "auto" }}
        />
        <br></br>
        <p className="text-justify px-[300px] text-lg">
        The Futures market is an integral part of the Financial Derivatives world.
        ‘Derivatives’, as they are called, is a security whose value is derived from 
        another financial entity referred to as an ‘Underlying Asset’. The underlying 
        asset can be anything a stock, bond, commodity or currency. The financial 
        derivatives have been around for a long time now. The earliest reference to 
        the application of derivatives in India dates back to 320 BC in ‘Kautilya’s Arthashastra’. 
        It is believed that in the ancient Arthashastra (study of Economics) script, Kautilya described
        the pricing mechanism of the standing crops ready to be harvested at some point in the future. 
        Apparently, he used this method to pay the farmers much in advance, thereby structuring a true ‘forwards contract’. <br></br>{" "}
          <br></br>
        </p>
        <br></br>
        <br></br>
        <br></br>
        <img
          src={pic1}
          alt="pic1"
          style={{ width: "60%", height: "500px", margin: "auto" }}
        />
        <br></br>

        <br></br>
        <br></br>
        <p className="text-justify px-[300px] text-lg">
        The Forward market was primarily started to protect the interest of the farmers from adverse price movements. In a forward market, the buyer and seller agree to exchange the goods for cash. The exchange happens at a specific price on a specific future date. The goods’ price is fixed by both the parties on the day they agree. Similarly, the date and time of the goods to be delivered is also fixed. The agreement happens face to face with no intervention from a third party. This is called “Over the Counter or OTC” agreement. Forward contracts are traded only in the OTC (Over the Counter) market, where individuals/ institutions trade through negotiations on a one to one basis.
        </p>
      </div>
    </div>
  );
};

export default Home;
