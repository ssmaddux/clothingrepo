const { Schema } = require('mongoose')


const pantSchema = new Schema(
    {
        waist_size: {type: String},
        length_size: {type: String},
        color: {type: String},
    },
    {timestamps: true,}
)

module.exports = pantSchema