from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)


app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'

db = SQLAlchemy(app)


@app.route('/')
def hello_world():
    return jsonify({'hi': 'there'})


@app.route('/api/links/<userId>', methods=['GET'])
def get_links(userId):
    return jsonify({'userId': userId})


@app.route('/api/link', methods=['POST'])
def add_link():
    data = request.get_json()
    return jsonify({'data': data})


@app.route('/redirect/<redirectId>', methods=['GET'])
def redirect_url(redirectId):
    return jsonify({'redirectId': redirectId})


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=3001, debug=True)
