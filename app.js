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

app.post('/item/add', (req, res) => {
  const newItem = new Item({
    height: req.body.height,
    weight: req.body.weight,
    bmi: req.body.weight / ((req.body.height * req.body.height) / 10000),
    name: req.body.name
  });

  newItem.save().then(item => res.redirect('/'));
});

// function datum() {
//   var datum = new Date().toLocaleDateString("en-UK").replace(/\//g, '-');
//   document.getElementById("dat").innerHTML = datum;
// }




app.listen(port);
