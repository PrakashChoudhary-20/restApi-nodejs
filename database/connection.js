const mongoose = require('mongoose')

const DB_URL = "mongodb://localhost/dishes"

module.exports = async () => {
    await mongoose.connect(DB_URL, { useNewUrlParser: true })
    console.log('DB Connection Established.')
}