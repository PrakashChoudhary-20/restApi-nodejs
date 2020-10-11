module.exports.addFoodItem = (req, res) => {
    console.log(req.body)
    res.send('OK ADDED NEW ITEM')
}