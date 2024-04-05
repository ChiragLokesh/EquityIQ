
from flask import Flask, jsonify, request  # Added request import
from flask_cors import CORS
import requests
from bs4 import BeautifulSoup
import logging

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

# Set up logging
logging.basicConfig(level=logging.DEBUG)

def get_stock_price(ticker):
    try:
        url = f'https://www.google.com/finance/quote/{ticker}:NSE'
        response = requests.get(url)
        response.raise_for_status()  # Raise an exception for 4xx/5xx status codes
        soup = BeautifulSoup(response.text, 'html.parser')
        ltp = "YMlKec fxKbKc"
        price = soup.find(class_=ltp).text
        return price
    except Exception as e:
        logging.error(f"Error fetching stock price: {e}")
        return None

@app.route("/api/stocks")
def get_stock_prices():
    stock_symbols = ['ASHOKLEY', 'SBIN', 'TCS', 'INFY', 'RELIANCE', 'HDFCBANK', 'ICICIBANK', 'HINDUNILVR', 'KOTAKBANK', 'TATASTEEL', 'ITC','LICI']
    stock_prices = {}
    for symbol in stock_symbols:
        stock_prices[symbol] = get_stock_price(symbol)
    return jsonify(stock_prices)

@app.route("/api/stock")
def get_specific_stock_price():
    symbol = request.args.get('symbol')
    if symbol:
        price = get_stock_price(symbol.upper())  # Ensure the symbol is uppercase to match your list
        if price:
            return jsonify({symbol: price})
        else:
            return jsonify({"error": "Stock symbol not found or error fetching price"}), 404
    else:
        return jsonify({"error": "No stock symbol provided"}), 400

if __name__ == "__main__":
    app.run(debug=True)
