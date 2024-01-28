const express = require('express');
// const db = require("./db")
const mongoose = require("mongoose");
const user = require('./routes/user')
const login = require('./routes/login')
 
const app = express();
const PORT = 3000;
const mongoDB = "mongodb://127.0.0.1/demo"

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
 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', login)
app.use('/user', user);
 
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});




// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require("mongoose");


// const app = express();
// const port = 3000;

// mongoose.connect("mongodb://localhost:27017");
// const database = mongoose.connection;
// database.on('error', (error) => {
//   console.log(error)
// })

// database.once('connected', () => {
//   console.log('Database Connected');
// })
// // Parses the text as url encoded data
// app.use(bodyParser.urlencoded({ extended: true }));
 
// // Parses the text as json
// app.use(bodyParser.json());

// const a = [
//   {
//     name: "ggg",
//     age: "13",
//   }, 
//   {
//     name: "yyyy",
//     age: "14",
//   },
// ]

// app.get('/', (req, res) => {
//   res.send(a)
// })

// app.post('/create', (req,res) =>{
//   console.log(req.body)
//   a.push(req.body)
//   res.send(a)
// })


// app.delete('/delete/:name', (req, res) => {
//     console.log("Working", req.params.name)
//     const result = a.filter(i=> i.name != req.params.name)

//     res.send(result)
// })

// app.get('/age/:age', (req, res) => {
//     console.log("Working", req.params.age)
//     const result = a.find(i => i.age == req.params.age)
//     res.send(result)
// })


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

