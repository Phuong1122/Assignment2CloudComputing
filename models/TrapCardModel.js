var mongoose = require('mongoose')
var TrapCardSchema = new mongoose.Schema(
    {
        Name: {
            type: String,
            required: true
        },
        Brand: {
            type: String,
            required: true
        },
        Price: {
            type: Number,
            required: true
        },
        Image: String,
        quantity: Number,
        color:String
    }
)
var TrapCardModel = mongoose.model('TrapCard', TrapCardSchema, 'TrapCard');
module.exports= TrapCardModel