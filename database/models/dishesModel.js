const mongoose = require('mongoose');

const dishesSchema = new mongoose.Schema({
    name: String,
    ingredients: Array,
    diet: String,
    cook_time: Number,
    region: String
}, {
    timestamps: true
})