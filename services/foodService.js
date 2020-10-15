const Dishes = require('../database/models/dishesModel')

module.exports.addFoodItem = async (item) => {
  const repository = new Dishes({ ...item })
  return await repository.save()
}

module.exports.getAll = async () => {
  try {
    return await Dishes.find()
  } catch (err) {
    console.log(err)
    throw err
  }
}

module.exports.getDishById = async (id) => {
  return await Dishes.findById(id)
}
