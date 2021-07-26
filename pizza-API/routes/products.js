const express = require('express');
const router = express.Router();

const pizzaData = require('../models/pizza');
const drinkData = require('../models/drink');
const packData = require('../models/pack');

router.get('/pizza', async (req, res) => {
    const products = await pizzaData.find({}); 
    res.send(products);
})

router.post('/pizza', async (req, res) => {
    const newProduct = new pizzaData(req.body);
    console.log(newProduct);
    newProduct.save()
    .then( data => {
        res.json(data)
    })
    .catch( err => {
        res.json({
            message: err 
        })
    })
})


router.get('/drink', async (req, res) => {
    const products = await drinkData.find({}); 
    res.send(products);
})

router.post('/drink', async (req, res) => {
    const newProduct = new drinkData(req.body);
    console.log(newProduct);
    newProduct.save()
    .then( data => {
        res.json(data)
    })
    .catch( err => {
        res.json({
            message: err 
        })
    })
})


router.get('/pack', async (req, res) => {
    const products = await packData.find({}); 
    res.send(products);
})

router.post('/pack', async (req, res) => {
    const newProduct = new packData(req.body);
    console.log(newProduct);
    newProduct.save()
    .then( data => {
        res.json(data)
    })
    .catch( err => {
        res.json({
            message: err 
        })
    })
})

module.exports = router;