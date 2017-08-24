demoApp.factory('indexService',function($http){

	indexFactory = {} ;

			indexFactory.create = function(Data){

					return $http.post('/api/names',Data,{});

			}
			indexFactory.getALL = function () {

					return $http.get('/api/getAllNames',{});

			}
			indexFactory.delete = function(id){

					return $http.delete('/api/deleteName/'+id,{});

			}
			indexFactory.update = function(updateData){

				return $http.put('/api/updateName/'+updateData._id,updateData,{})
			}

	return indexFactory ;

})
