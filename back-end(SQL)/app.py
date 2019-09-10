from flask import Flask, jsonify, request


app = Flask(__name__)


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
