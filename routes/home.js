var express = require('express');
const ProductModel = require('../models/ProductModel')
const SpellCardModel = require('../models/SpellCardModel');
const TrapCardModel = require('../models/TrapCardModel');
const ColorModel = require('../models/ColorModel');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  var SpellCards = await SpellCardModel.find();
  var TrapCards = await TrapCardModel.find();
  var colors = await ColorModel.find();
  res.render('home/index', { 
     SpellCards: SpellCards,
     TrapCards: TrapCards,
     colors: colors
   });
})

router.get('')
module.exports = router;
