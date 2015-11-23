var app = angular.module('blogApp', ['ngRoute','hc.marked']);



app.controller('blogAppController', [function() {
}]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/home',{
            templateUrl:'./templates/welcome.html',
            controller: 'welcomeController as welcome'
    }).when("/blog/:articleId",{
            templateUrl:'./templates/blogs/blog.html',
            controller: 'articleController as article'
    }).when("/contact",{
            templateUrl:'./templates/contact.html'
    }).otherwise({
        redirectTo:'/home'
    });
}]);
