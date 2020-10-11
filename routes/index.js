const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodItemController') 

router.post('/', foodController.addFoodItem)

module.exports = router;