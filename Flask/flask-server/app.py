from flask import Flask, jsonify, request, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime, date
from uuid import uuid4
from urllib.parse import urlparse
from flask_cors import CORS


# create an instance of the flask WSGI app
app = Flask(__name__)


# configurations for the app
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'


# initiate middleware
CORS(app)
db = SQLAlchemy(app)


# routes
from routes import *

# local host and port are based on my attemped to use a frontend 
# that is universal to the other porjects on this repo
if __name__ == '__main__':
    app.run(host='localhost', port=3001, debug=True)
