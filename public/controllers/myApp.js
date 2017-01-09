var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope, $http, $location){

$http.get('/clients')
    .then(function(res){
       console.log('Fetching data from the server');
        $scope.clients = res.data;
        console.log(res.data);
    });

});
