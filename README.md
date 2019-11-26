# Share Analytics

## <center>Walkthrough Update</center>

<p align="center">
<img src="walkthrough.gif" />
</p>

# Instructions (MERN)

1. go into the MERN folder
```
cd MERN
```

2. install dependencies 
```
npm run install-everything
```

3. AWS auth
```
cd client
amplify init
amplify add auth (if you dont have a AWS amplify project)
```

4. run both front-end and back-end servers
```
cd ..
npm run dev
```

# Instructions (Flask)
*CRUD in progress (Flask); MERN fully CRUD*

1. go into the PyRF folder
```
cd PyRF
```

2a. install dependencies (front-end)
```
cd react-client
npm install
```

2b. install dependencies (back-end)
```
cd flask-server
pipenv shell
pipenv install
```

3. AWS auth
```
amplify init
amplify add auth
```

4a. run both front-end
```
npm start
```

4b. and back-end servers
```
python3 app.py
```

# Description

Give a link you want to have it's clicks tracks and get a link to use to share.

# Tech Stack

#### Front End

- AWS cognito; authentication
- React JS (ES6+) + Typescript
- React Bootstrap
- Chart JS
- Axios
- Redux
- Redux Thunk
- Redux Saga

#### Testing

- Jest
- Enzyme

#### Back End (NoSQL)

- Node JS
- Express JS
- Mongo DB

#### Back End (SQL) - Python

- Python 3
- Flask
- PostgreSQL
