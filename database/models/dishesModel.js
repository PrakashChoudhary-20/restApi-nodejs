const mongoose = require('mongoose');

const dishesSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'DB Validation Failed: Property "name" is required. ']},
    ingredients: {type: Array, required: [true, 'DB Validation Failed: Property "ingredients" is required.']},
    diet: {type: String, required: [true, 'DB Validation Failed: Property "diet" is required']},
    cook_time: {type: Number},
    region: String
}, {
    timestamps: true
})

module.exports = mongoose.model('foods', dishesSchema);