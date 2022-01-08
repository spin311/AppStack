const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose
  .connect(
    'mongodb://mongo:27017/docker-node-mongo',
    { useNewUrlParser: true }
  )

const Item = require('./models/Item');

app.get('/', (req, res) => {
  Item.find()
    .then(items => res.render('index', { items }));
});

// function datum() {
//   var datum = new Date().toLocaleDateString("en-UK").replace(/\//g, '-');
//   document.getElementById("dat").innerHTML = datum;
// }

app.post('/item/add', (req, res) => {
  const newItem = new Item({
    height: req.body.height,
    weight: req.body.weight,
    bmi: req.body.weight / ((req.body.height * req.body.height) / 10000),
    name: req.body.name
  });

  newItem.save().then(item => res.redirect('/'));
});

const port = 3000;

app.listen(port);
