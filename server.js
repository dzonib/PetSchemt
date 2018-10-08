const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const db = require('./config/keys').db;

(async () => {
  try {
    await mongoose.connect(db, {useNewUrlParser: true});
    console.log('Connected to db');
  } catch(e) {
    console.log(`MONGOOSE CONNECT ERROR --> ${e}`);
  }
})();

const app = express();

app.use(bodyParser.json());

const shelterAPI = require('./routes/api/shelter');
const animalAPI = require('./routes/api/animal');

app.use(passport.initialize());

require('./config/passport')(passport);

app.use('/api/shelter', shelterAPI);
app.use('/api/animal', animalAPI);


const port = process.env.PORT || 3003;

app.listen(port, console.log('Server is alive'));