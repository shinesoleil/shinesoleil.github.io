var app = angular.module('blogApp', ['ngRoute']);

app.controller('blogAppController', ['$scope', function($scope) {
    $scope.message = 'Hello World';
}]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
        when('/home',{
        template:'<h1>Welcome page</h1>'
    }).when("/contact",{
        templateUrl:'contact.html'
    }).otherwise({
        template:'<h2>Other pages</h2>'
    });


}]);
