from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
	return 'WELCOME!'

@app.route('/login')
def login():
	return {"success":True}

if __name__ == '__main__':
	app.run(debug=True)
