import Stocks from "src/assets/stocks.jpg";
const Home = () => {
  return (
    <div>
        <div className="relative bg-slate-
        900 min-h-screen flex-items-center justify-center">
            <img src={Stocks} alt="Stocks" className="absolute inset-0 w-full h-full object-cover opacity-75" />
            <div className="absolute inset-0 flex flex-col pl-10 justify-center">
                <h1 className="text-white font-extrabold text-5xl mb-4">Welcome to EquityIQ</h1>
                <h2 className="text-white font-bold text-3xl">Ignite your spark of ambition here!</h2>
            </div>
        </div>
        <div className="bg-gray-800 py-10 flex flex-col items-center justify-center">
            <h2 className="text-white text-3xl font-bold px-10">About us:</h2>
            <h2 className="text-white text-xl px-10 text-center">
                EquityIQ is designed with the overarching goal of democratizing stock market analysis. 
                It serves as a powerful tool that simplifies and streamlines the intricate process of 
                dissecting and understanding market dynamics. By leveraging cutting-edge technology 
                and intuitive design, EquityIQ makes stock market analysis accessible to individuals 
                across all levels of expertise, from seasoned investors to those just starting their 
                journey in financial markets.
            </h2>
        </div>
        <div className="bg-gray-800 py-10 flex flex-col items-center">
            <h2 className="text-white text-3xl font-bold px-10">Disclaimer:</h2>
            <h2 className="text-white text-xl px-10 text-center">
            Disclaimer:
            The information provided by EquityIQ is for educational and informational purposes only and should not be construed as investment advice. 
            Investing in securities involves risks, including the potential loss of principal. Past performance is not indicative of future results.
            All investments involve risks, and individual investment decisions should be made after conducting thorough research and considering 
            one's financial situation, risk tolerance, and investment objectives. EquityIQ does not provide personalized investment advice or recommendations. 
            </h2>
        </div>
        <div className="bg-gray-700 py-6 flex items-center justify-between">
            <div className="text-white flex">
                <a href="#" className="px-4 py-2">Customer Support</a>
                <a href="#" className="px-4 py-2">FAQ</a>
                <a href="#" className="px-4 py-2">Contact Us</a>
            </div>
            <div>
            <   p className="text-white">© 2024 EquityIQ. All rights reserved.</p>
            </div>
        </div>
    </div>
  );
};

export default Home;
