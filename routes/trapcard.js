var express = require('express');
var router = express.Router();
const TrapCardModel =require('../models/TrapCardModel');

router.get('/', async(req,res) =>{
    var trapcards = await TrapCardModel.find();
    res.render('trapcard/index', {trapcards:trapcards})
})

router.get('/detail/:id', async (req, res) => {
    var id = req.params.id;
    var trapcard = await TrapCardModel.findById(id);
    res.render('trapcard/detail', { trapcard:trapcard });
 })
 
 router.get('/delete/:id', async (req, res) => {
    var id = req.params.id;
    await TrapCardModel.findByIdAndDelete(id);
    console.log('Delete product succeed');
    res.redirect('/trapcard');
 })
 
 router.get('/add', (req, res) => {
    res.render('trapcard/add');
 })
 
 router.post('/add', async (req, res) => {
    var trapcard = req.body;
    await TrapCardModel.create(trapcard);
    console.log('Add Product !');
    res.redirect('/trapcard');
 })
 
 router.get('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var trapcard = await TrapCardModel.findById(id);
    res.render('trapcard/edit', { trapcard: trapcard })
 })
 
 router.post('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var trapcard = req.body;
    await TrapCardModel.findByIdAndUpdate(id, trapcard);
    console.log('Update product succeed !');
    res.redirect('/trapcard');
 })
 router.post('/search', async(req,res)=>{
    var keyword = req.body.name;
    var trapcards = await TrapCardModel.find({Name: new RegExp(keyword,"i")});
    res.render('trapcard/index', {trapcards:trapcards})
 })



module.exports = router;
