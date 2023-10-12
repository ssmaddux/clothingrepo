const { Schema } = require('mongoose')


const shirtSchema = new Schema(
    {
        size: {type: String},
        color: {type: String},
        image: {type: String}
    },
    {timestamps: true,}
)

module.exports = shirtSchema