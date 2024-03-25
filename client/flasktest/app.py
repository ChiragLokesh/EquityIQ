from flask import Flask, render_template
import requests
from bs4 import BeautifulSoup
import logging

app = Flask(__name__)

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

@app.route("/")
def index():
    stock_symbols = ['ASHOKLEY', 'SBIN', 'TCS', 'INFY', 'RELIANCE', 'HDFCBANK', 'ICICIBANK', 'HINDUNILVR', 'KOTAKBANK', 'HDFC', 'ITC']
    stock_prices = {}

    # Fetching stock prices
    for symbol in stock_symbols:
        stock_prices[symbol] = get_stock_price(symbol)

    return render_template('index.html', stock_prices=stock_prices)

if __name__ == "__main__":
    app.run(debug=True)
