const mongoose = require('mongoose');

const packSchema = mongoose.Schema({
    packId : String,
    packImage : String,
    packName : String,
    packPrice : String,
})

module.exports = mongoose.model('Pack List', packSchema);