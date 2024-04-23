var express = require('express');
var router = express.Router();
const ProductModel = require('../models/ProductModel');
const SpellCardModel = require('../models/SpellCardModel');
const TrapCardModel = require('../models/TrapCardModel');
const ColorModel = require('../models/ColorModel');

router.get('/', async (req, res) => {
   var spellcards = await SpellCardModel.find();
   var trapcards = await TrapCardModel.find();
   var colors = await ColorModel.find();
   console.log(spellcards);
   res.render('product/index', { 
      spellcards: spellcards,
      trapcards: trapcards,
      colors: colors
    });
})
router.get('/detail/:id', async (req, res) => {
    var id = req.params.id;
    // SELECT * FROM student WHERE id = 'id'
    var product = await ProductModel.findById(id);
    res.render('product/detail', { product:product });
 })
 
 router.get('/delete/:id', async (req, res) => {
    var id = req.params.id;
    await SpellCardModel.findByIdAndDelete(id);
    await TrapCardModel.findByIdAndDelete(id);
    await ColorModel.findByIdAndDelete(id);
    console.log('Delete product succeed');
    res.redirect('/product');
 })
 
 router.get('/add', (req, res) => {
    res.render('product/add');
 })
 
 router.post('/add', async (req, res) => {
    var product = req.body;
    await ProductModel.create(product);
    console.log('Add Product !');
    res.redirect('/product');
 })
 
 router.get('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var product = await ProductModel.findById(id);
    res.render('product/edit', { product: product })
 })
 
 router.post('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var product = req.body;
    await ProductModel.findByIdAndUpdate(id, product);
    console.log('Update product succeed !');
    res.redirect('/product');
 })
 router.post('/search', async(req,res)=>{
    var keyword = req.body.name;
    var spellcards = await SpellCardModel.find({Name: new RegExp(keyword,"i")});
    res.render('product/index', {spellcards:spellcards})
 })



module.exports = router;
