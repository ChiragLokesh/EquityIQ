import Stocks from "src/assets/stocks.jpg";
import pic from "src/assets/ch2-1.jpeg";
import pic1 from "src/assets/ch2-2.jpeg";
import pic2 from "src/assets/ch2-3.jpeg";

const Home = () => {
  return (
    <div className="bg-slate-50">
      <div className="pt-10 pl-10">
        <h1 className="text-black font-extrabold text-5xl mb-4">
          Technical Analysis
        </h1>
        <h2 className="text-black font-bold text-3xl">
          Learn how to evaluate stocks
        </h2>
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
          In the previous chapter, we briefly understood technical analysis and
          the main difference between technical and fundamental analysis. In
          this chapter, we will dig a bit deeper and explore the assumptions
          technical analysis is based upon.
        </p>
        <br></br>
        <p className="text-justify px-[300px] text-lg">
          One of the greatest advantages of technical analysis is that you can
          apply TA on any asset class as long as the asset type has historical
          time series data. Time series data in technical analysis is the price
          information, namely – open high, low, close, volume, etc. Here is an
          analogy that may help. Think about learning how to drive a car. Once
          you learn how to drive a car, you can drive any car, whether a
          Mahindra XUV or a Maruti Swift. Likewise, you only need to learn
          technical analysis once. <br></br>
          <br></br>Once you do so, you can apply TA on any asset class –
          equities, commodities, foreign exchange, fixed income, etc. The fact
          that TA can be applied to multiple assets is probably one of the
          biggest advantages of TA compared to the other stock market research
          techniques. For example, one has to study the profit and loss, balance
          sheet, and cash flow statements when it comes to the fundamental
          analysis of equity. However, the fundamental analysis of commodities
          is completely different. When dealing with an agricultural commodity
          like Coffee or Pepper, the fundamental analysis includes analyzing
          rainfall, harvest, demand, supply, inventory etc. However, the
          fundamentals of metal commodities are different, so it is for energy
          commodities. <br></br>
          <br></br>So every time you choose a commodity, the fundamentals
          change. On the other hand, the concept of technical analysis will
          remain the same irrespective of the asset you are studying. For
          example, an indicator such as ‘Moving average convergence divergence
          (MACD) or ‘Relative strength index (RSI) is used the same way on
          equity, commodity, or currency.
        </p>
        <br></br>
        <p className="text-justify px-[300px] text-lg">
          <br></br> The concept of trend is the foundation of technical
          analysis. For example, the recent upward movement in the NIFTY 50
          Index to 18500 from 14750 did not happen overnight. This move happened
          in a phased manner in over 11 months. Another way to look at it is
          that once the trend is established, the price moves in the direction
          of the trend. 4) History tends to repeat itself – In the technical
          analysis context, the price trend tends to repeat itself. This happens
          because the market participants consistently react to price movements
          in remarkably similar ways every time the price moves in a certain
          direction. For example, in an uptrend, market participants get greedy
          and want to buy irrespective of the high price. Likewise, market
          participants want to sell in a downtrend irrespective of the low and
          unattractive prices. This human reaction has been the same towards
          stock prices over time, ensuring that history repeats itself.
        </p>
        <p className="text-justify px-[300px] text-lg">
          Unlike fundamental analysts, technical analysts don’t worry about the
          company’s valuation. The only thing that matters is the stock’s
          historical trading data (price and volume) and the insights the past
          data provides about the future movement in stock price. Technical
          Analysis is based on a few key assumptions. <br></br>
          <br></br>You need to know these assumptions to ensure you use
          technical analysis effectively. 1) Markets discount everything – This
          assumption tells us that all known and unknown information in the
          public domain is reflected in the latest stock price. For example, an
          insider could buy the company’s stock in large quantities in
          anticipation of a good quarterly earnings announcement. While the
          insider does this secretively, the price reacts, revealing to the
          technical analyst that something is about to happen in the stock
          price. 2) The ‘how’ is more important than the ‘why’ – This is an
          extension of the first assumption. Going with the same example
          discussed above – the technical analyst would not be interested in
          questioning why the insider bought the stock as long as the technical
          analyst knows how the price reacted to the insider’s action. 3) Price
          moves in trend – All major moves in the market are an outcome of a
          trend.<br></br>
          <br></br> The concept of trend is the foundation of technical
          analysis. For example, the recent upward movement in the NIFTY 50
          Index to 18500 from 14750 did not happen overnight. This move happened
          in a phased manner in over 11 months. Another way to look at it is
          that once the trend is established, the price moves in the direction
          of the trend. 4) History tends to repeat itself – In the technical
          analysis context, the price trend tends to repeat itself. This happens
          because the market participants consistently react to price movements
          in remarkably similar ways every time the price moves in a certain
          direction. For example, in an uptrend, market participants get greedy
          and want to buy irrespective of the high price. Likewise, market
          participants want to sell in a downtrend irrespective of the low and
          unattractive prices. This human reaction has been the same towards
          stock prices over time, ensuring that history repeats itself.
          <br></br>
          <br></br>
          The Indian stock market is open from 9:15 AM to 03:30 PM. During the 6
          hours 15-minute market session, millions of trades occur. Think about
          an individual stock – every minute, a trade gets executed on the
          exchange. As market participants do we need to keep track of all the
          different price points at which a trade is executed? To illustrate
          this further, let us consider this imaginary stock in which many
          trades exist. Look at the picture below. Each point refers to a trade
          being executed at a particular time. If one manages to plot a graph
          that includes every second from 9:15 AM to 3:30 PM, the graph will be
          cluttered with many points. I’ve tried to represent this in the chart
          below –
        </p>
        <br></br>
        <img
          src={pic1}
          alt="pic1"
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
        <br></br>
        <img
          src={pic2}
          alt="pic2"
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
