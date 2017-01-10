var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope, $http, $location){

    $http.get('/clients')
        .then(function(res){
           console.log('Fetching data from the server');
            $scope.clients = res.data;
            console.log(res.data);
        });

    $scope.isAdding = true;

    $scope.addClient = function(){

        $scope.isAdding = true;
        var client = $scope.client;
        $http.post('/clients', client)
            .then(function(res){
                console.log('Client added');
                $location.url = '/';
            });
    };

    $scope.editClient = function(id){
        $scope.isAdding = false;
        $http.get('/clients/'+id)
            .then(function(res){
                $scope.client = res.data;
            })
    };


});
