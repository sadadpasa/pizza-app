const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express();

const productsRoutes = require('./routes/products');

//MIDDLEWARES
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json()); 

app.use(cors());

app.use('/products', productsRoutes);
app.use( (req, res) => {
  res.send("halo");
})

//CONNECT TO DATABASE
const mongoose = require('mongoose');
const uri = "mongodb+srv://admin:TA2q.4PpAXT7WNv@cluster0.afljp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(uri, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
  })
.then( () => app.listen(5000, () => console.log("im working")))
.catch( err => console.log(err))