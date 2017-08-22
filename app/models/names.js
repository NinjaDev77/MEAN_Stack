var mongoose = require ('mongoose');
var Schema = mongoose.Schema;
var namesSchema = new Schema({
	username: { type : String , required: true , unique : true}

});

module.exports = mongoose.model('Names',namesSchema)
