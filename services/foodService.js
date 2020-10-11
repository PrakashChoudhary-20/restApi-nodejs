const mongoose = require('mongoose');
const Dishes = require('../database/models/dishesModel')

module.exports.addFoodItem = async (item) => {
    let repository = new Dishes({...item});
    try {
        return await repository.save()
    } catch(err) {
        console.log(err)
    }
}