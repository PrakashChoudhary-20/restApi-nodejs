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
