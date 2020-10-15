const express = require('express')
const router = express.Router()
const foodController = require('../controllers/foodItemController')

router.post('/', foodController.addFoodItem)
router.get('/get_all_dishes', foodController.getAll)
router.get('/get_dish/:id', foodController.getDishById)

module.exports = router
