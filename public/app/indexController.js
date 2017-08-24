demoApp.controller('indexCtrl',function ($scope,$http,indexService,$timeout) {

  $scope.heading        = 'Demo Application';
  $scope.openAddingForm = false;
  $scope.isSuccess      = false;
  $scope.isError        = false;
  $scope.loading        = false;
  $scope.showEditForm   = false;
  $scope.successMessage = '';
  $scope.errorMessage   = '';
  $scope.listOfNames    = [];
  $scope.user           = {};

  // funtion to open the form to Add
  $scope.openForm=function() {

    $scope.openAddingForm   = true;
    $scope.showEditForm     = false;

  };

  // function to create a name
  $scope.createNames=function() {

    if($scope.user.name){
      indexService.create($scope.user).then(function (data) {

        if (data.data.success) {

          $scope.isSuccess      = true;
          $scope.successMessage = data.data.message;
          $scope.openAddingForm = false;
          $scope.user.name      = '';
          $scope.getAllNames();

          $timeout(function(){

            $scope.isSuccess      = false;
            $scope.successMessage ='';

          },2000);


        } else {

          $scope.isError        = true;
          $scope.errorMessage   = data.data.message;
          $scope.openAddingForm = false;
          $scope.user.name      = '';


          $timeout(function(){

            $scope.isError      = false;
            $scope.errorMessage ='';

          },2000);

        }

      });

    }

  };

  // Function to get list of all names
  $scope.getAllNames = function() {

    indexService.getALL().then(function (data) {

      $scope.listOfNames = data.data.data;

    });

  };

  // Function to delete the name
  $scope.deleteName = function(id) {

    $scope.loading=true;

    indexFactory.delete(id).then(function(data){
      //console.log(data.data.success);
      $scope.loading        = false;

      if (data.data.success) {

        $scope.isSuccess      = true;
        $scope.successMessage = data.data.message;
        $scope.openAddingForm = false;
        $scope.getAllNames();

        $timeout(function(){

          $scope.isSuccess      = false;
          $scope.successMessage ='';

        },2000);

      } else {

        $scope.isError        = true;
        $scope.errorMessage   = data.data.message;
        $scope.openAddingForm = false;

        $timeout(function(){

          $scope.isError      = false;
          $scope.errorMessage ='';

        },2000);

      }


    });

  };

  // Function to Update
  $scope.updateNameById = function (){

    if ($scope.updateName) {
      indexService.update($scope.updateName).then(function (data) {

        if (data.data.success) {

          $scope.isSuccess            = true;
          $scope.successMessage       = data.data.message;
          $scope.showEditForm         = false;
          $scope.updateName.username  = '';
          $scope.getAllNames();

          $timeout(function(){

            $scope.isSuccess      = false;
            $scope.successMessage ='';

          },2000);


        } else {

          $scope.isError                = true;
          $scope.errorMessage           = data.data.message;
          $scope.showEditForm           = false;
          $scope.updateName.username    = '';


          $timeout(function(){

            $scope.isError      = false;
            $scope.errorMessage ='';

          },2000);

        }

      });

    }

  };

  // function to open the edit form 
  $scope.editName=function(editData){

    $scope.showEditForm   = true;
    $scope.updateName     = editData;
    $scope.openAddingForm = false;


  }
  // Initial call to fetch all data
  $scope.getAllNames();

})
