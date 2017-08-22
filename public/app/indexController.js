demoApp.controller('indexCtrl',function ($scope,$http,indexService) {
  $scope.heading='Demo Application';
  $scope.openAddingForm=false;
  $scope.openForm=function() {
    $scope.openAddingForm=true;
  };

  $scope.listOfNames=[];
  var id=0;
  $scope.createNames=function(name){
    var reqData={name:name};
    if(reqData){
      indexService.create(reqData).then(function (data) {
        if (data) {
          console.log(data);
        }
      })
    }
}
$scope.getAllNames=function(){
  indexService.getALL().then(function (data) {
    console.log(data.data);
    $scope.listOfNames=data.data;
  })
};
$scope.getAllNames();
})
