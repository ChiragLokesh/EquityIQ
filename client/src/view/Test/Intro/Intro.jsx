import Stocks from "src/assets/stocks.jpg";
import pic from "src/assets/Ch1-1.jpeg";
import pic1 from "src/assets/ch1-2.jpg";
import pic2 from "src/assets/ch1-3.png";
const Home = () => {
  return (
    <div className="bg-slate-50">
        <div className="pt-10 pl-10">
            <h1 className="text-black font-extrabold text-5xl mb-4">Introduction to Stock Market</h1>
            <h2 className="text-black font-bold text-3xl">Learn how the stock market works</h2>
        </div>
        <div className="pt-20 pb-10">
            <h2 className="text-justify px-[300px]">
                Before we address the above question, let us understand what would happen 
                if one chooses not to invest. Assume you earn Rs.50,000/- per month, and 
                you spend Rs.30,000/-towards your day-to-day living; this can include 
                expenses like housing, food, transport, shopping, medical, etc. The balance 
                of Rs.20,000/- is your monthly surplus.
            </h2>
            <img
            src={pic}
            alt="pic"
            style={{ maxWidth: "100%", maxHeight: "100%", margin: "auto" }}
          />
          <p className="text-justify px-[300px]">
            For the sake of simplicity, let us ignore the tax effect in this
            discussion. To drive the point across, let us make a few simple
            assumptions – The employer is kind enough to give you a 10% salary
            hike every year. The cost of living is likely to go up by 8% yearly.
            You are 30 years old and plan to retire at 50, this translates to 20
            working years. You don’t intend to work after you retire. Your
            expenses are fixed, and you don’t foresee any other expenses. The
            balance cash of Rs.20,000/- per month is retained as hard cash.
            Going by these assumptions, here is what the cash balance will look
            like in 20 years.
          </p>
          <img
            src={pic1}
            alt="pic1"
            style={{ maxWidth: "50%", maxHeight: "40%", margin: "20px auto" }}
          />
          <p className="text-justify px-[300px]">
            If one were to analyze these numbers, one would soon realize this is
            a scary situation. A few things are quite obvious – After 20 years
            of hard work, you have accumulated Rs.1.7Crs. Since your expenses
            are fixed, your lifestyle has not changed over the years, and you
            probably even suppressed your lifelong aspirations – a better home,
            car, vacations, etc. After you retire, assuming the expenses will
            continue to grow at 8%, the retirement corpus of Rs.1.7Crs is good
            enough to sail you through roughly 8 years of post-retirement life.
            8th year onwards, you will be in a tight spot with literally no
            savings left to back you up. What would you do after you run out of
            money in 8 years? How do you fund your life? Is there a way to
            ensure that you collect a more considerable sum at the end of 20
            years? At this point, you may think that the assumptions are simple
            and that real life does not work like this. I agree, and I won’t
            dispute that fact. However, the point to note in the above
            calculation is that no investments are made, hence the cash retained
            has a flat or zero growth. Let’s consider another scenario where
            instead of keeping the cash idle, you choose to invest the cash in
            an investment option that grows at, let’s say, 12% per annum. For
            example – in the first year, you retained Rs.240,000/- which, when
            invested at 12% per annum for 20 years (19 years assuming you invest
            at the end of 1st year), yields Rs.2,067,063/- at the end of the
            20th year. For those interested in math, here is how that works – =
            240000*(1+12%)^(19) = 2067063 Dont worry about the math at this
            point. We will explain that later in this module (and several other
            modules in Varsity). Here is how the table looks if you choose to
            invest.
          </p>
          <img
            src={pic2}
            alt="pic2"
            style={{ maxWidth: "50%", maxHeight: "40%", margin: "20px auto" }}
          />
        </div>
    </div>
  );
};

export default Home;
