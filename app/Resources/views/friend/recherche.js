var app = angular.module('recherche', ['ngRoute']);
app.controller('rechercheCtrl', function($scope, $http) {
    $http.get("http://localhost:8000/appartoo/web/app_dev.php/usersjson")
        .then(function(response) {
            $scope.liste = response.data;
            console.log($scope.liste);
        });
});
