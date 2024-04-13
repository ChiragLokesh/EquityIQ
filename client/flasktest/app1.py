from flask import Flask, jsonify
import csv
from flask_cors import CORS
from urllib.parse import unquote

app = Flask(__name__)
CORS(app)  # Enable CORS for all domains on all routes

# Load data from the CSV file
def load_data(filename="ratio stocks.csv"):
    data = []
    with open(filename, 'r') as file:
        reader = csv.DictReader(file)
        for row in reader:
            data.append(row)
    return data

# Define route for the home page
@app.route('/api/stocks')
def index():
    # Load stock data from CSV
    stock_data = load_data('ratios stocks.csv')
    return jsonify(stock_data)  # Return JSON data

@app.route('/api/v2/stocks/details/<path:name>')
def stock_detail(name):
    # Decode the URL-encoded name parameter
    decoded_name = unquote(name)

    # Load stock data from CSV
    stock_data = load_data('ratios stocks.csv')

    # Find the stock with the given name, assuming case-insensitive matching
    stock = next((s for s in stock_data if s['NAME'].lower() == decoded_name.lower()), None)
    
    # Check if stock was found
    if stock is None:
        return jsonify({"error": "Stock not found"}), 404

    return jsonify(stock)  

if __name__ == '__main__':
    app.run(debug=True, port=5001)
