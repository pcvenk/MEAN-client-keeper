var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope, $http, $timeout){

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
                window.location.href='/';
            });
    };

    $scope.editClient = function(id){

        $scope.isAdding = false;
        $http.get('/clients/'+id)
            .then(function(res){
                $scope.client = res.data;
            })
    };

    $scope.isUpdating = false;

    $scope.upadateClient = function(){

        $scope.isUpdating = true;
        var id = $scope.client._id;

        $timeout(function(){
            $http.put('/clients/'+id, $scope.client)
                .then(function(res){
                    window.location.href='/';
                });
        }, 1500);
    }


});
