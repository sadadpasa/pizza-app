const mongoose = require('mongoose');

const pizzaSchema = mongoose.Schema({
    pizzaId: String,
    pizzaImage: String,
    pizzaName: String,
    sPrice: String, 
    mPrice : String, 
    lPrice : String, 
    xlPrice : String
})


module.exports = mongoose.model('Pizza List', pizzaSchema);