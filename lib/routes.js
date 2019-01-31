'use strict'
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send('All notes will appear here');
});


//Adds new note
router.post('/note', function(req, res){
    res.send('New note');
});


//Gets content of a note
router.get('/note/:slug', function(req, res){
    var slug = req.params.slug;
    res.send('This is a note');
});

//Updates the selected note
router.put('/note/:slug', function(req, res){
    var slug = req.params.slug;
    res.send('Edit a note');
});


//Deletes the selected note
router.get('/note/:slug/delete', function(req, res){
    var slug = req.params.slug;
    res.send(`The note ${slug} no longer exists`);
});


module.exports = router;