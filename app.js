const express = require ('express');
const mongoose = require('mongoose');
require('dotenv/config');
var app = express();
var PORT = 3000;

app.set('view engine', 'ejs');

const { MongoClient } = require('mongodb');
const uri = process.env.DB_CONNECTION;

app.use(express.urlencoded({ extended: false }));
mongoose
.connect(
  "mongodb://mongo:27017/docker-node-mongo", {useUnifiedTopology: true, useNewUrlParser: true}
).then(() => console.log('connected with mongoose'));

const Item = require('./models/Item');

function calculateBMI() {


  var visina = 100;
  var debelina = 100;
  
  var bmi = 0;

  if (visina === "" || isNaN(visina)) 
       return null;
  
    else if (debelina === "" || isNaN(debelina)) 
        return null;

  else {
   bmi = (debelina / ((visina * visina)  / 10000)).toFixed(2);
   return bmi;
  }


}

app.get('/', (req, res) => {
  Item.find()
  .then(items => res.render('index', { items }))
  .catch(err => res.status(404).json({ msg: 'No items found' }));
});

app.post('/item/add', (req, res) => {
  const newItem = new Item({
   bmi: calculateBMI()
  }).then(() => console.log("Added BMI:", bmi));

  newItem.save().then(item => res.redirect('/'));
});


app.listen(PORT, function(err){
  if (err) console.log(err);
  console.log("Server running on PORT:", PORT);
}); 