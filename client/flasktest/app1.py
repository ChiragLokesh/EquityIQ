from flask import Flask, jsonify
import csv

app = Flask(__name__)

# Load data from the CSV file
def load_data(filename):
    data = []
    with open(filename, 'r') as file:
        reader = csv.DictReader(file)
        for row in reader:
            data.append(row)
    return data

# Define route for the home page
@app.route('/')
def index():
    # Load stock data from CSV
    stock_data = load_data('ratios stocks.csv')
    return render_template('index1.html', stock_data=stock_data)

# Define route for displaying individual stock ratios
@app.route('/stock/<name>')
def stock_detail(name):
    # Load stock data from CSV
    stock_data = load_data('ratios stocks.csv')
    # Find the stock with the given name
    stock = next((s for s in stock_data if s['NAME'] == name), None)
    return render_template('stock_detail.html', stock=stock)

# Define API endpoint to get all stocks data
@app.route('/api/stocks')
def get_stocks_api():
    stock_data = load_data('ratios stocks.csv')
    return jsonify(stock_data)

# Define API endpoint to get data of a specific stock by name
@app.route('/api/stock/<name>')
def get_stock_api(name):
    stock_data = load_data('ratios stocks.csv')
    stock = next((s for s in stock_data if s['NAME'] == name), None)
    if stock:
        return jsonify(stock)
    else:
        return jsonify({'error': 'Stock not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)
