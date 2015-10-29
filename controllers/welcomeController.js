app.controller('welcomeController', ['$scope', function($scope) {
    $scope.todoList = [
        {"number": 1, "task": "write articles (of course....)"},
        {"number": 2, "task": "search box"},
        {"number": 3, "task": "contact page"},
        {"number": 4, "task": "test more angular features"},
        {"number": 5, "task": "......"}
    ];
}])