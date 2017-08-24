var Names 		= require ('../models/names');
var mongoose 	= require ('mongoose');
var namesCtrl = require ('../controllers/namesController');



module.exports = function(router) {

  // CRUD ON NAMES 
  router.get('/getAllNames', namesCtrl.readNames);
  router.post('/names', namesCtrl.createName);
  router.put('/updateName/:id',namesCtrl.updateNames);
  router.delete('/deleteName/:id',namesCtrl.deleteName);

  return router;
}
