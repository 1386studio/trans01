var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var conflictSchema = new Schema({
    name: String,
    region: String,
    impact_to_us: String,
    impact_to_cn: String,
    cover_image_url: String,
    numbers: Array,
    status: String,
    type: String,
    intro: String,
    map_url: String,
    albulm: Array,
    editor: String
  });
module.exports = mongoose.model('conflicts', conflictSchema);