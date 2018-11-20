var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var conflicts = require('../model/conflict.js');
var _ = require('lodash');
/* GET home page. */
router.get('/:id?', function(req, res, next) {
  mongoose.connect("mongodb://127.0.0.1/gct", function(err) {
    if(!err){
      conflicts.find({},null,{lean:true},function(err,docs){
        var index = req.params.id ? _.findIndex(docs, function(o) { return o._id == req.params.id; }) : 0;
        index = index >= 0 ? index : 0;
        res.render('index', { title: 'Express', conflicts: docs, selected: docs[index]});
      })
    }
  });
});
router.put('/:id?', function(req, res, next) {
  mongoose.connect("mongodb://127.0.0.1/gct", function(err) {
    if(!err){
      conflicts.updateOne({_id: req.params.id}, req.body, function(err,docs){
        res.json({
            success : 1,
            message : "..."
        });
      });
    }
  });
});
module.exports = router;
