var Names = require ('../models/names');
module.exports=function(router){
	router.post('/names',function(req,res){
			var name=new Names();
			name.username=req.body.name;
			if (name.username==null || name.username== '') {
				res.json({
					message:'Invalid Name',
					success:false
				});
			}else {
				name.save(function(err){
				if (err){
					console.log(err)
					res.json({
						message:"Name Already Exists !",
						success:false
				});
				}else
				{
					res.json({message:'Name is created',
							success:true
							});
				}
			});
		}
	});

	router.get('/getAllNames',function(req,res){

		Names.find({},function(err,data){
			if (err) {
				res.json({message:'Whoops Something Went Wong!',
									success:false})
			}else {
				res.json({
					data:data,
					success:true
				})
			}
		})

	})

	return router;
}
