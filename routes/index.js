var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var conflicts = require('../model/conflict.js');
var alerts = require('../model/alert.js');
var _ = require('lodash');
/* GET home page. */
router.get('/:id?', function(req, res, next) {
  mongoose.connect("mongodb://localhost/gct", function(err) {
    if(!err){
      conflicts.find(function(err,docs){
        var index = req.params.id ? _.findIndex(docs, function(o) { return o._id == req.params.id; }) : 0;
        index = index >= 0 ? index : 0;
        res.render('index', { title: 'Express', conflicts: docs, selected: docs[index]});
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
