const service = require('../services/foodService')
const defaultResponse = require('../response/')

module.exports.addFoodItem = async (req, res) => {
  const response = { ...defaultResponse }
  try {
    const result = await service.addFoodItem(req.body)
    response.status = 201
    response.message = 'Item created successfully'
    response.body = result
  } catch (err) {
    response.body = {}
  }
  res.status(response.status).send(response)
}

module.exports.getAll = async (req, res) => {
  const response = { ...defaultResponse }
  try {
    const result = await service.getAll()
    response.status = 200
    response.message = 'List of dishes'
    response.body = result
  } catch (err) {
    response.body = {}
  }
  res.status(response.status).send(response)
}

module.exports.getDishById = async (req, res) => {
  const response = { ...defaultResponse }
  try {
    const result = await service.getDishById(req.params.id)
    response.status = 200
    response.message = 'Dish found'
    response.body = result
  } catch (err) {
    console.log(err)
    response.body = {}
  }
  res.status(response.status).send(response)
}
