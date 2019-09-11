from flask import Flask, jsonify, request, redirect
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)


app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'

db = SQLAlchemy(app)


@app.route('/')
def test_route():
    return jsonify({'working': True})


@app.route('/api/links/<userId>', methods=['GET'])
def get_links(userId):
    """
    input:
    userId = "65ce5dad-85df-4355-94f5-2669d8fce4de"

    expected:
    [
        {
            "data": [
                {
                    "date": "8/6/2019",
                    "clicks": 2
                }
            ],
            "_id": "5d6f07ad8e3b312e8c06b07f",
            "redirectId": "1a451bb3-cb6a-46c6-8761-fb6636089a6c",
            "redirectURL": "http://localhost:3001/redirect/1a451bb3-cb6a-46c6-8761-fb6636089a6c",
            "userId": "65ce5dad-85df-4355-94f5-2669d8fce4de",
            "link": "https://mongoosejs.com/",
            "title": "Mongoose",
            "date": "2019-09-11T08:39:33.492Z",
            "links": [],
            "__v": 0
        },
        etc...
    ]
    """
    return jsonify({'userId': userId})


@app.route('/api/link', methods=['POST'])
def add_link():
    """
    input:
    {
        userId: "65ce5dad-85df-4355-94f5-2669d8fce4de",
        link: "https://mongoosejs.com/",
        title: "Mongoose",
        date: "2019-09-11T08:39:33.492Z",
        data: []
    }

    expect:
    {
        "data": [],
        "_id": "5d6f07ad8e3b312e8c06b07f",
        "redirectId": "1a451bb3-cb6a-46c6-8761-fb6636089a6c",
        "redirectURL": "http://localhost:3001/redirect/1a451bb3-cb6a-46c6-8761-fb6636089a6c",
        "userId": "65ce5dad-85df-4355-94f5-2669d8fce4de",
        "link": "https://mongoosejs.com/",
        "title": "Mongoose",
        "date": "2019-09-11T08:39:33.492Z",
        "links": [],
        "__v": 0
    }
    """
    data = request.get_json()
    return jsonify({'data': data})


@app.route('/redirect/<redirectId>', methods=['GET'])
def redirect_url(redirectId):
    """
    input: 
    redirectId = "1a451bb3-cb6a-46c6-8761-fb6636089a6c"

    expect:
    redirect to https://mongoosejs.com/
    """
    print(redirectId)
    # change to redirect
    return redirect("https://mongoosejs.com/")


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=3001, debug=True)
