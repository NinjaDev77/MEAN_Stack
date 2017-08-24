var Names 		= require ('../models/names');
var mongoose 	= require ('mongoose');

module.exports.createName=function(req,res){

      var name 			= new Names();
      name.username = req.body.name;

      if (name.username == null || name.username == '') {

          res.json({
              message: 'Invalid Name',
              success: false
          });

      } else {

          name.save(function(err) {
            if (err) {

              console.log(err);

              res.json({
                message: "Name Already Exists !",
                success: false
              });

            } else {

              res.json({
                message: 'Name is created',
                success: true
              });

            }

          });

      };

};

module.exports.readNames=function(req,res){

    Names.find({}, function(err, data) {

      if (err) {

          res.json({

              message : 'Whoops Something Went Wong!',
              success : false
          });

      } else {

          res.json({

              data    : data,
              success : true
          });

      };

    });
};

module.exports.updateNames=function(req,res){

  var id          = req.params.id;
  var username    = req.body.username;

  Names.findOneAndUpdate({'_id':id}, {$set: { username: username }},function(err,data){
    if (err) {
        console.log(err);

        res.json({

            message : 'Whoops Something Went Wong!',
            success : false
        });

    } else {

        res.json({

            message : 'Name is Updated',
            success : true
        });

    };
  });

};

module.exports.deleteName=function(req,res){

  var id 		= 	req.params.id;

  Names.remove({'_id' : id}, function(err) {
    if (err) {
        console.log(err);

        res.json({

            message : 'Whoops Something Went Wong!',
            success : false
        });

    } else {

        res.json({

            message : 'Name is deleted',
            success : true
        });

    };

  });

};
