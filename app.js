const express = require('express');
const mongoose = require('mongoose');
var port = 3000;

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose
  .connect(
    'mongodb://mongo:27017/docker-node-mongo',
    { useNewUrlParser: true }
  );


const Item = require('./models/Item');

app.get('/', (req, res) => {
  Item.find()
});

// function datum() {
//   var datum = new Date().toLocaleDateString("en-UK").replace(/\//g, '-');
//   document.getElementById("dat").innerHTML = datum;
// }




app.listen(port);
