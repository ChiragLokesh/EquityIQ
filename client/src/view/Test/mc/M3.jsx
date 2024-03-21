import Stocks from "src/assets/stocks.jpg";
import pic from "src/assets/ch3-1.jpeg";
import pic1 from "src/assets/ch3-2.jpeg";
import pic2 from "src/assets/ch3-3.jpeg";
import pic3 from "src/assets/ch3-4.jpeg";
import pic4 from "src/assets/ch3-5.jpeg";
import pic5 from "src/assets/ch3-6.jpeg";
import pic6 from "src/assets/ch3-7.jpeg";
import pic7 from "src/assets/ch3-8.jpeg";

const Home = () => {
  return (
    <div className="bg-slate-50">
      <div className="pt-10 pl-10">
        <h1 className="text-black font-extrabold text-5xl mb-4">
          Fundamental Analysis
        </h1>
        <h2 className="text-black font-bold text-3xl">Learn the fundamental</h2>
      </div>
      <div className="pt-20 pb-10">
        <br></br>
        <img
          src={pic}
          alt="pic"
          style={{ width: "60%", height: "500px", margin: "auto" }}
        />
        <br></br>
        <p className="text-justify px-[300px] text-lg">
          Fundamental Analysis (FA) is a holistic approach to study a business.
          When an investor wishes to invest in a business for the long term (say
          3 – 5 years), it becomes essential to understand the business from
          various perspectives. It is critical for an investor to separate the
          daily short term noise in the stock prices and concentrate on the
          underlying business performance. Over the long term, a fundamentally
          strong company’s stock prices tend to appreciate, thereby creating
          wealth for its investors <br></br> <br></br> We have many such
          examples in the Indian market. To name a few, one can think of
          companies such as Infosys Limited, TCS Limited, Page Industries,
          Eicher Motors, Bosch India, Nestle India, TTK Prestige etc. Each of
          these companies has delivered an average over 20% compounded annual
          growth return (CAGR) year on year for over 10 years. At a 20% CAGR,
          the investor would double his money in roughly about 3.5 years to give
          you a perspective. Higher the CAGR faster is the wealth creation
          process. Some companies such as Bosch India Limited have delivered
          close to 30% CAGR. Therefore, you can imagine the magnitude and the
          speed at which wealth is created if one would invest in fundamentally
          strong companies. <br></br> <br></br> Here are long term charts of
          Bosch India, Eicher Motors, and TCS Limited that can set you thinking
          about long term wealth creation. Do remember these are just 3 examples
          amongst the many that you may find in Indian markets. <br></br>{" "}
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
        <img
          src={pic2}
          alt="pic2"
          style={{ width: "60%", height: "500px", margin: "auto" }}
        />
        <br></br>
        <img
          src={pic3}
          alt="pic3"
          style={{ width: "60%", height: "500px", margin: "auto" }}
        />
        <br></br>

        <p className="text-justify px-[300px] text-lg">
          The market opened at 9:15 AM and closed at 3:30 PM, during which there
          were many trades. It will be practically impossible to track all these
          different price points.<br></br>One needs a summary of the trading
          action and not the details on all the different price points. We can
          summarise the price action by tracking the Open, high, low, and close.
          <br></br>Open Price – When the markets open for trading, the first
          price a trade executes is called the opening price. <br></br>The High
          Price – This represents the highest price at which a trade occurred
          for the given day. <br></br>The Low Price – This represents the lowest
          price at which a trade occurred for the given day. <br></br>The Close
          Price – This is the most important price because it is the final price
          at which the market closes for the day. The close indicates the
          intraday strength and a reference price for the next day. If the close
          is higher than the open, it is considered a positive day; otherwise
          negative. Of course, we will deal with this in greater detail as we
          progress through the module.<br></br> The closing price also shows the
          market sentiment and serves as a reference point for the next day’s
          trading. For these reasons, closing is more important than the
          opening, high or low prices.<br></br> The main data points from the
          technical analysis perspective are open, high, low, and close prices.
          Each of these prices has to be plotted on the chart and analyzed.
        </p>
      </div>
    </div>
  );
};

export default Home;
