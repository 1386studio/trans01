var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var alertSchema = new Schema({
    title: String,
    datetime: String,
    content: String,
    source: String,
    conflict: String
});
module.exports = mongoose.model('alerts', alertSchema);