const service = require('../services/foodService')
let defaultResponse = require('../response/')

module.exports.addFoodItem = async (req, res) => {
    let response = {...defaultResponse}
    try {
        let result = await service.addFoodItem(req.body)
        response.status = 201,
        response.message = "Item created successfully",
        response.body = result
    }
    catch(err) {
        console.log(err)
        response.body = {}
    }
    res.status(response.status).send(response);
}