var app = angular.module('blogApp', ['ngRoute']);

app.controller('blogAppController', ['$scope', function($scope) {
    $scope.message = 'Hello World';
}]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/home',{
            templateUrl:'./templates/welcome.html',
            controller: 'welcomeController'
    }).when("/blog",{
            templateUrl:'./templates/blogs/blog.html'
    }).when("/contact",{
            templateUrl:'./templates/contact.html'
    }).otherwise({
        redirectTo:'/home'
    });


}]);
