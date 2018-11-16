var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var conflicts = require('../model/conflict.js');
var alerts = require('../model/alert.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  mongoose.connect("mongodb://localhost/gct", function(err) {
    if(!err){
      conflicts.find(function(err,docs){
        res.render('index', { title: 'Express', conflicts: docs});
      })
    }
  });
});
router.get('/alerts', function(req, res, next) {
  mongoose.connect("mongodb://localhost/gct", function(err) {
    if(!err){
      alerts.find(function(err,docs){
        res.send({
          "code": 0,
          "msg": "",
          "data": docs
        });
      })
    }
  });
});
module.exports = router;
