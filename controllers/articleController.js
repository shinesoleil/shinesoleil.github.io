app.controller('articleController', ['$scope', '$routeParams', function($scope, $routeParams) {
    this.articleId = $routeParams.articleId;
}]);