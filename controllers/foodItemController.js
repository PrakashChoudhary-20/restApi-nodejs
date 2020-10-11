const service = require('../services/foodService')

module.exports.addFoodItem = async (req, res) => {
    let response = {
        status: '',
        message: '',
        body: ''
    }

    try {
        let result = await service.addFoodItem(req.body)
        response.status = 201,
        response.message = "Item created successfully",
        response.body = result
    }
    catch(err) {
        console.log(err)
        response.status = 500,
        response.message = "Something went wrong",
        response.body = {}
    }
    res.status(response.status).send(response);
}