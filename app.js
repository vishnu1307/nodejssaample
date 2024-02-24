const express = require('express');
// const db = require("./db")
const mongoose = require("mongoose");
const user = require('./routes/user')
const login = require('./routes/login')
const middlewareValidator = require('./middleware/middleware')
const app = express();
const port = 3000;
const mongoDB = "mongodb://127.0.0.1/demo"
const {authentication} = require('./middleware/middleware')

mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;

let db = mongoose.connection;

db.on('connected', () => {
  console.log("connected")
})

db.on('error', (error) => {
  console.log(error)
})
// db.connect();
async function validateCookies (req, res, next) {
  if(req.url != '/'){
  await middlewareValidator(req, res, next);
  }
  next()
}


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(validateCookies)
app.set('port', 3000)
app.use('/api/v1', authentication)
// app.use('/', login)
// app.use('/user', user);
// app.use(require('./routes/index.routes'))

// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

module.exports = app
