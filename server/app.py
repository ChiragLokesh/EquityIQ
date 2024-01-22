from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return 'WELCOME!'

@app.route('/login')
def login():
    return {"success": True}

@app.route('/market-data', methods=['GET', 'POST'])
def market_data():
    if request.method == "POST":
        print(request.json)
        #call market api
        return {'da': 'ta'}    
    return {'data': 'dehfu'}

if __name__ == '__main__':
    app.run(debug=True)
