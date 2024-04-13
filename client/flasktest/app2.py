from flask import Flask, request, jsonify, render_template
import pandas as pd
import numpy as np

app = Flask(__name__)

def load_data(filename):
    try:
        data = pd.read_csv(filename)
        print("Data loaded successfully.")
        # Replace NaN with None right after loading
        return data.replace({np.nan: None})
    except Exception as e:
        print(f"Failed to load data: {e}")
        return pd.DataFrame()  # Return an empty DataFrame if there's an error

data = load_data('/Users/chiragreddy/Documents/EquityIQ/client/flasktest/ratios stocks.csv')

@app.route('/')
def index():
    return render_template('filter1.html')

@app.route('/filter2')
def filter_page_two():
    return render_template('filter2.html')

@app.route('/api/stocks', methods=['GET'])
def filter_stocks():
    pe_min = request.args.get('peMin', type=float)
    pe_max = request.args.get('peMax', type=float)
    eps_min = request.args.get('epsMin', type=float)
    eps_max = request.args.get('epsMax', type=float)
    div_yield_min = request.args.get('divYieldMin', type=float)
    div_yield_max = request.args.get('divYieldMax', type=float)
    pb_ratio_min = request.args.get('pbRatioMin', type=float)
    pb_ratio_max = request.args.get('pbRatioMax', type=float)

    filtered_data = data
    if pe_min is not None:
        filtered_data = filtered_data[filtered_data['P/E RATIO'] >= pe_min]
    if pe_max is not None:
        filtered_data = filtered_data[filtered_data['P/E RATIO'] <= pe_max]
    if eps_min is not None:
        filtered_data = filtered_data[filtered_data['EPS'] >= eps_min]
    if eps_max is not None:
        filtered_data = filtered_data[filtered_data['EPS'] <= eps_max]
    if div_yield_min is not None:
        filtered_data = filtered_data[filtered_data['DIV YEILD(%)'] >= div_yield_min]
    if div_yield_max is not None:
        filtered_data = filtered_data[filtered_data['DIV YEILD(%)'] <= div_yield_max]
    if pb_ratio_min is not None:
        filtered_data = filtered_data[filtered_data['P/B RATIO'] >= pb_ratio_min]
    if pb_ratio_max is not None:
        filtered_data = filtered_data[filtered_data['P/B RATIO'] <= pb_ratio_max]

    result = filtered_data.to_dict(orient='records')
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True, port=5002)
