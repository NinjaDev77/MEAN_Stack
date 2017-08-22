demoApp.factory('indexService',function($http){
	indexFactory={};

	indexFactory.create= function(Data){
		return $http.post('/api/names',Data,{});
	}
	indexFactory.getALL=function () {
		return $http.get('/api/getAllNames',{});
	}
	return indexFactory ;

})
