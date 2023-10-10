const { Schema } = require('mongoose')


const shortSchema = new Schema(
    {
        size: {type: String},
        color: {type: String},
    },
    {timestamps: true,}
)

module.exports = shortSchema
