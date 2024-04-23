var express = require('express');
var router = express.Router();
const SpellCardModel = require('../models/SpellCardModel');
const ColorModel = require('../models/ColorModel');

router.get('/', async(req,res) =>{
    var spellcards = await SpellCardModel.find();
    res.render('spellcard/index', {spellcards:spellcards})
})

router.get('/detail/:id', async (req, res) => {
    var id = req.params.id;
    // SELECT * FROM student WHERE id = 'id'
    var spellcard = await SpellCardModel.findById(id);
    res.render('spellcard/detail', { spellcard:spellcard });
 })
 
 router.get('/delete/:id', async (req, res) => {
    var id = req.params.id;
    await SpellCardModel.findByIdAndDelete(id);
    console.log('Delete product succeed');
    res.redirect('/spellcard');
 })
 
 router.get('/add', async (req, res) => {
   var color = await ColorModel.find();
    res.render('spellcard/add', {color : color});
 })
 
 router.post('/add', async (req, res) => {
    var spellcard = req.body;
    await SpellCardModel.create(spellcard);
    console.log('Add Product !');
    res.redirect('/spellcard');
 })

  
 router.get('/color',  (req, res) => {

   res.render('spellcard/add');
})

router.post('/color', async (req, res) => {
   var spellcard = req.body;
   await SpellCardModel.create(spellcard);
   console.log('Add Product !');
   res.redirect('/spellcard/add');
})
 
 router.get('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var spellcard = await SpellCardModel.findById(id);
    res.render('spellcard/edit', { spellcard: spellcard })
 })
 
 router.post('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var spellcard = req.body;
    await SpellCardModel.findByIdAndUpdate(id, spellcard);
    console.log('Update product succeed !');
    res.redirect('/spellcard');
 })
 router.post('/search', async(req,res)=>{
    var keyword = req.body.name;
    var spellcards = await SpellCardModel.find({Name: new RegExp(keyword,"i")});
    res.render('spellcard/index', {spellcards:spellcards})
 })



module.exports = router;
