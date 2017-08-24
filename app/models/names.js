var mongoose 		= require ('mongoose');
var Schema 			= mongoose.Schema;


// Names Schema
var namesSchema = new Schema({

				username: { type : String , required: true , unique : true}

});

// export name Schema
module.exports = mongoose.model('Names',namesSchema)
