const mongoose = require('mongoose');

const drinkSchema = mongoose.Schema({
    drinkId: String,
    drinkImage: String,
    drinkName: String,
    drinkPrice: String
})

module.exports = mongoose.model('Drink List', drinkSchema);