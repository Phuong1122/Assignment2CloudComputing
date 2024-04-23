var mongoose = require('mongoose');

var SpellCardSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true  // Sửa 'require' thành 'required'
    },
    Brand: {
        type: String,
        required: true  // Sửa 'require' thành 'required'
    },
    Price: {
        type: Number,
        required: true  // Sửa 'require' thành 'required'
    },
    Image: String,
    quantity: Number,
    color:String
});

var SpellCardModel = mongoose.model('SpellCard', SpellCardSchema, 'SpellCard');
module.exports = SpellCardModel;
