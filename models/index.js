const mongoose = require('mongoose')
const pantSchema = require('./pant')
const shirtSchema = require('./shirt')
const shortSchema = require('./short')

const Pant = mongoose.model('Pant', pantSchema)
const Shirt = mongoose.model('Shirt', shirtSchema)
const Short = mongoose.model('Short', shortSchema)

module.exports = {
    Pant,
    Shirt,
    Short
}