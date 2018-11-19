var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var conflicts = require('../model/conflict.js');
var alerts = require('../model/alert.js');
var _ = require('lodash');
router.get('/', function(req, res, next) {
  mongoose.connect("mongodb://localhost/gct", function(err) {
    if(!err){
      alerts.find(function(err,docs){
        res.json({
          "code": 0,
          "msg": "",
          "data": docs
        });
      })
    }
  });
});
router.put('/:id?', function(req, res, next) {
  mongoose.connect("mongodb://localhost/gct", function(err) {
    if(!err){
      alerts.updateOne({_id: req.params.id}, req.body, function(err,doc){
        res.json({
          success : 1,
          message : "..."
        });
      });
    } else {
      console.log(err);
    }
  });
});
router.post('/:id?', function(req, res, next) {
  mongoose.connect("mongodb://localhost/gct", function(err) {
    if(!err){
      alerts.create(req.body, function(err,docs){
        res.json({
          success : 1,
          message : "..."
        });
      });
    } else {
      console.log(err);
    }
  });
});
module.exports = router;
