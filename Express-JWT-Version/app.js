const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Config
const port = 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

// Routes
app.use('/', require('./api/base'))
app.use('/auth', require('./api/users'))
app.use('/api', require('./api/links'));
app.use('/redirect', require('./api/redirect'));

// General Error Handling
app.use((req, res, next) => {
  res.status(404).json({error: "Page does not exist"});
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({error: err.stack});
});

// Mongoose
// mongoose.connect('mongodb://localhost:27017/shareanalytics', {
//   useNewUrlParser: true,
// });
// mongoose.connection.once('open', () => {
//   console.log('connected to mongoose database: shareanalytics');
// });
mongoose.connect('mongodb://localhost:27017/deleteSample1', {
  useNewUrlParser: true,
});
mongoose.connection.once('open', () => {
  console.log('connected to mongoose database: deleteSample1');
});

// Start
app.listen(port, () =>
  console.log(`Express Running On --> http://localhost:${port}`),
);
